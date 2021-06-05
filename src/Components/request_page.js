import React, { useState } from "react";
import styled from "styled-components";

import {useBrush, Artboard } from "react-artboard";

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

export default function RequestPage() {

    const [artboardRef, setArtBoardRef] = useState(null);

    const brush = useBrush({color: "black", strokeWidth: 20 });

    //This will have to either download the image locally or send it to a server.
    //Sending it to a server would take more time, just uploading it to IPFS and getting a hash might be better.
    //Can use nft.storage to make this happen. Once the URL is give you can then go ahead and enter the meta,
    //And lanuch the NFT.
    
    function download_image() {
        console.log(artboardRef);
        artboardRef.download();
    }

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


            <button onClick={() => download_image()}>
                Download Image: 
            </button>

            <br />
            <br />
        </>
    )
}