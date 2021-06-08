import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Newsletter from "./Common/newsletter";
import SeeMore from "./Common/seeMore";
import WhatIsAnNFT from "./Common/whatIsAnNft";

//Going to have to pull sig-pic from the IPFS ideally.
import MySig from "../Images/KyleSig.png";

//Web3 stuff
import Web3 from "web3";

import HashinkABI from "./Hashink.json";

const HashinkContractAddress = "0x649D13D78bAB1E45E36180aa566519b57e5A6694";
//const ONE_ETHER = 1000000000000000000;

//This will have to be pulled from the sever or maybe attached to the IPFS as well
export const ExampleData = {
    id: 0,
    ResponseIn: "1 day",
    Reviews: "3 stars",
    Fans: "32,420",
}

const HeaderBox = styled.div`
    display: block;
    
    margin-left: 10%;
`

const HeaderText = styled.div`
    margin-left: 130px;
    p {
        line-height: 0.5;
    }
`

const FaceImageHolder = styled.div`
    width: 100px;
    height: 100px;
    background-color: grey;
    border-radius: 50%;
`

const PersonMetaContainer = styled.div`
    height: 110px;
    border: 2px solid purple;
`

const PersonMetaBox = styled.div`
    float: left;

    background-color: black;
    color: white;
    padding: 5px;
    margin: 5px;
`

const RequestButton = styled.div`
    border-radius: 15px;
    background-color: green;
    color: white;
    padding: 10px;
    margin-top: 15px;
    text-align: center;
`

const RequestContainer = styled.div`
    background-color: black;
    border-radius: 10px;
    color: white;
    padding: 25px;
    margin-top: 5px;
`

//Potentially add in paramters that have to be passed when someone clicks on a proflie they want to view
export default function RequestPage() {

    const [isRequesting, setIsRequestState] = useState(false);

    async function send_request() {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();

        const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

        await Contract.methods
            .CreateRequest("0xe09AAF082E0e16A7cd7096E1c5Bd1Df408535417")
            .send( {from: Ethaccounts[0], value: 1000000})
            .once("Res", (res) => {
                console.log(res);
            })
    }

    // async function get_request_ID(Celeberity_Address) {
    //     const web3 = window.web3;
    //     const Ethaccounts = await web3.eth.getAccounts();

    //     const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

    //     await Contract.methods
    //         .CreateRequest(Celeberity_Address)
    //         .call( {from: Ethaccounts[0], value: 1000000}, function (error, res) {
    //             console.log("ID: " + res);
    //         })
    // }

    useEffect(() => {
        async function loadWeb3() {
            if (window.ethereum) {
              window.web3 = new Web3(window.ethereum);
              await window.ethereum.enable();
              return true;
            } else if (window.web3) {
              window.web3 = new Web3(window.web3.currentProvider);
              return true;
            } else {
              return false;
            }
        }

        loadWeb3();
    }, [])

    return (
        <>  
            <img src={MySig} alt="mySignature" />

            <HeaderBox>
                <div Style="float:left;
                            margin-top: 10px;">
                    <FaceImageHolder />
                </div>

                <HeaderText>
                    <h2>Kyle "klongrich" Longrich</h2>
                    <p>BIG STAR </p>
                    <p>Taxi Driver</p>
                    <p>0xe09AAF082E0e16A7cd7096E1c5Bd1Df408535417</p>
                    <p>The Irishman</p>
                </HeaderText>
            </HeaderBox>

            <PersonMetaContainer>
                <PersonMetaBox>
                    <p>Responds In</p>
                    <p> {ExampleData.ResponseIn} </p>
                </PersonMetaBox>

                <PersonMetaBox>
                    <p>Reviews</p>
                    <p> {ExampleData.Reviews} </p>
                </PersonMetaBox>

                <PersonMetaBox>
                    <p>Fans</p>
                    <p> {ExampleData.Fans} </p>
                </PersonMetaBox>
            </PersonMetaContainer>

            {/* update $230 to pull from IPFS or server */}

            {!isRequesting && (
            <>
                <RequestButton onClick={() => setIsRequestState(true)}>
                    Request $230
                </RequestButton>

                <p> How does it work? </p>

                <p>1.) Send a request to your star </p>
                <p>2.) Pay with CC or cryptocurrency </p>
                <p>3.) Once Bobby Milk replies your request, 
                    your payment will be sent him. 
                </p>
                <p>4.) You receive your NFT, and will be notified</p>
            
                <p> If you request isn't answered, you may  canacel your request and recover your payment </p>
               
                <br />
                <br />
            </>
            )}

            {isRequesting && (
                <>
                    <RequestButton onClick={() => setIsRequestState(false)} >
                        Request $230
                    </RequestButton>

                    <RequestContainer>
                        <p> To </p>

                        <input
                            placeholder="Name"
                        />

                        <p> Message </p>

                        <input 
                            placeholder="Can I get a happy birthday autograph?"
                        />

                        <p> Select an occasion </p>
                    </RequestContainer>

                    <RequestButton onClick={() => send_request()}>
                        Ready!
                    </RequestButton>

                </>
            )}

            <Newsletter />
            <SeeMore />
            <WhatIsAnNFT />
            
        </>
    )
}