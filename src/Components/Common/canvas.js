import React, { useState , useEffect} from "react";
import Web3 from "web3";

import styled from "styled-components";

import {useBrush, Artboard } from "react-artboard";
import { NFTStorage, Blob } from "nft.storage";

import HashinkABI from "../Hashink.json";
const  HashinkContractAddress = "0x649D13D78bAB1E45E36180aa566519b57e5A6694";

const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQwOTAzNzkxMTE2Mzc4QzFhMzQzQWNEOTlkODM5QTVjOUNEMTkwZDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyMjM0MzExMzE0NCwibmFtZSI6Ik1ldGFDYXJkcyJ9.nxK3qwZzikTkvwRqyHAVTPn4ycHW40xFatYM6S2vOZk" });

const TopText = styled.div`
    font-size: 30px;

    border-bottom: 1px solid grey;
    padding-bottom: 20px;
    width: 150px;
    text-align: center;

    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 40%;
`

const DrawingBox = styled.div`
    border: 2px solid black;
    padding-right: 100px;
    width: 300px;
    z-index: 3;
`

export default function Canvans() {

    const [artboardRef, setArtBoardRef] = useState(null);
    const [imageURI, setImageURI] = useState(null);
    const [imageIPFShash, setImageIPFShash] = useState(null);

    const brush = useBrush({color: "black", strokeWidth: 10 });

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

    async function mint_new_token(tokenURI) {
      const web3 = window.web3;
      const Ethaccounts = await web3.eth.getAccounts();

      const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

      await Contract.methods
          .mint("0xe09AAF082E0e16A7cd7096E1c5Bd1Df408535417", 123123 , tokenURI)
          .send( {from: Ethaccounts[0], value: 0})
          .once("receipt", (res) => {
              console.log(res);
          })
    }

    async function send_data_to_ipfs() {


        const image = new Blob([JSON.stringify(artboardRef.getImageAsDataUri())])
        const cid = await client.storeBlob(image)

        let imageURL = "https://ipfs.io/ipfs/" + cid;
        let data;

        data = {
          "name" : "testing open sea meta",
          "description" : "This is some more meta",
          "image" : imageURL,
          "attributes" : [
            {
              "trait_type" : "more meta testing",
              "value" : 100
            }
          ]
        }

        const full_content = new Blob([JSON.stringify(data)]);
        const full_cid = await client.storeBlob(full_content);

        console.log("cid: " + cid);
        console.log("full_cid: " + full_cid);

        let tokenMetaURL = "https://ipfs.io/ipfs/" + full_cid;
        
        mint_new_token(tokenMetaURL);
        // setImageIPFShash(cid);
        // mint_new_token(tokenURL);
        // cid is the IPFS hash that the ImageURI has converted to.
    }

    function getImageFromIPFS() {
      fetch('https://ipfs.io/ipfs/' + imageIPFShash)
      .then(response =>  {
        return response.json();
      }).then(data => {
        setImageURI(data);
      })
    }

    useEffect( async () => {
      await loadWeb3();

      console.log("ImageUR: " + imageURI);
    })

    return (
        <>
            <TopText>
                Canvas
            </TopText>

            <DrawingBox>

            <Artboard tool={brush} 
                      style={{widht: 500, height: 500}}
                      ref={setArtBoardRef}
                      />
            
            </DrawingBox>


            <button onClick={() => send_data_to_ipfs()}>
                Download Image: 
            </button>

            <br />
            <br />

            <h2>
                Testing
            </h2>

            <button onClick={() => getImageFromIPFS()}>
                Submit
            </button>

            <img style={{width: 500, height: 500}} src={imageURI} />
        </>
    )
}