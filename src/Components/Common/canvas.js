import React, { useState , useEffect} from "react";

import styled from "styled-components";

import {useBrush, Artboard } from "react-artboard";
import { NFTStorage, File, Blob } from "nft.storage";

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
    margin: 10px;
    width: 90%;
`

export default function Canvans() {

    const [artboardRef, setArtBoardRef] = useState(null);
    const [imageURI, setImageURI] = useState(null);

    const brush = useBrush({color: "black", strokeWidth: 20 });

    async function send_data_to_ipfs() {
        const content = new Blob([JSON.stringify(artboardRef.getImageAsDataUri())])
        const cid = await client.storeBlob(content)

        //cid is the IPFS hash that the ImageURI has converted to.
        console.log(cid);
    }

    function getImageFromIPFS() {
      fetch('https://ipfs.io/ipfs/bafkreigmzfmr5hvhmnwovqdiklr6x4hhoideflpljmwclhewh3wzq3hv4u')
      .then(response =>  {
        return response.json();
      }).then(data => {
        setImageURI(data);
      })
    }

    useEffect(() => {
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
                      ref={setArtBoardRef} />
            
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