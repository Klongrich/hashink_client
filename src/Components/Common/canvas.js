import React, { useState , useEffect} from "react";
import Web3 from "web3";

import styled from "styled-components";

import {useBrush, Artboard } from "react-artboard";
import { NFTStorage} from "nft.storage";

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
    border: 2px solid #808080;
    margin-left: 50px;
    margin-right: 50px;
`

const SelectMetaContainer = styled.div`
  border: 1px solid black;
  padding-left: 30px;
  padding-bottom: 30px;


  color: #848485;
`

const PreviewContainer = styled.div`
  border: 1px solid black;
  padding-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;

  color: #848485;
`

const DownLoadImage = styled.div`
    color: white;
    background-color: #808080;
    padding: 15px;
    width: 130px;

    margin-left: 50px;

`

export default function Canvans() {

    const [artboardRef, setArtBoardRef] = useState(null);
    const [image, setImage] = useState(null);
    const [imageURI, setImageURI] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const [metaName, setMetaName] = useState("Enter Name");
    const [metaDiscrtiption, setMetaDiscription] = useState("Enter Description");

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
          .mint("0xe09AAF082E0e16A7cd7096E1c5Bd1Df408535417",  Math.floor(Math.random() * (10000000 - 1)) + 1, tokenURI)
          .send( {from: Ethaccounts[0], value: 0})
          .once("receipt", (res) => {
              console.log(res);
          })
    }

    async function submit_data(){
      const metadata = await client.store({
        name: metaName,
        description: metaDiscrtiption,
        image: new File([image], 'testing.png', { type: 'image/png' }),
        attributes : [
          {
            trait_type: "Rairty",
            value: "714"
          }
        ]
      })

      console.log(metadata.url)
      mint_new_token(metadata.url);
    }

    useEffect( async () => {
      await loadWeb3();
    }, [])

    return (
      <>
        <TopText>
            Canvas
        </TopText>

        <DrawingBox>
          <Artboard tool={brush} 
                    style={{height: 325}}
                    ref={setArtBoardRef}
                    />
        </DrawingBox>
        <br />

        <DownLoadImage onClick={() => artboardRef.download()}>
          Download Image: 
        </DownLoadImage>

        <br />
        <br />

        <SelectMetaContainer>
          <h2>
              Select Meta
          </h2>

          <h3>Name: </h3>
          <input 
            type="text"
            value={metaName}
            onChange={e => setMetaName(e.target.value)}
          />

          <h3>Description: </h3>
          <input
            type="text"
            value={metaDiscrtiption}
            onChange={e => setMetaDiscription(e.target.value)}
          />

          <h3>Image: </h3> 
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setPreviewImage(URL.createObjectURL(file));
              setImage(file);
            }}
          />
          </SelectMetaContainer>
           
          <PreviewContainer>
            <h2>
              Preview
            </h2>

            <div Style="border: 1px solid black;
                        height: 500px; 
                        width: 500px;">
              <img style={{width: 500, height: 500}} src={previewImage} /> 
            </div>

            <br />
            <br />

            <h3>  Name:  <br /> {metaName} </h3>
            <h3> Discrtiption: <br /> {metaDiscrtiption} </h3>

          </PreviewContainer>

          <button onClick={() => submit_data()}>
                Mint NFT ->
            </button>
          <br />
          <br />
      </>
    )
}