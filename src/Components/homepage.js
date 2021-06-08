import React from "react";
import styled from "styled-components";

import Newsletter from "./Common/newsletter";
import SeeMore from "./Common/seeMore";
import WhatIsAnNFT from "./Common/whatIsAnNft";

import { Star } from "@styled-icons/boxicons-regular/Star";
import  { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight"
import { CaretRight } from "@styled-icons/boxicons-regular/CaretRight"
import { CaretLeft } from "@styled-icons/boxicons-regular/CaretLeft"

import {rankingData, spotLightData} from "../Data/homePageData";

import TestingPic from "./MySig.png";

const FaceImageHolder = styled.div`
    width: 70px;
    height: 70px;
    background-color: grey;
    border-radius: 50%;
`

const Container = styled.div`
    color: #848485;

    text-align: center;
    letter-spacing: 2px;
`
const SpotLightBox = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin-left: 10px;
    display: inline-block;
    width: 150px;
    width: 250px;
`

const SeeMoreButton = styled.div`
    color:white;
    background-color: grey;
    padding: 5px;
    margin: 10px;
    width: 105px;
    height: 25px;
    text-align:center;
`

const FaceImageHolder2 = styled.div`
    width: 50px;
    height: 50px;
    background-color: grey;
    border-radius: 50%;

    margin-top: -66px;
`

const RankingContainer = styled.div`
    background-color: grey;
    padding-top: 0px;
    padding-bottom: 30px;
`

const RankingBox = styled.div`
    background-color: white;
    width: 390px;
    height: 42px;
    padding: 20px;
    margin: 5px;
    margin-left: 25%;
`

const RankingBoxText = styled.div`
    margin-left: 75px;
    margin-top: -45px;
`

const ArrowBox = styled.div`
    margin-left: 350px;
    margin-top: -38px;
`

export default function HomePage () {

    return (
        <>
        <Container>
            <h1>Star autographs in NFT form</h1>
            <h2>[collect, trade, buy, and sell]</h2>
        
            <div Style="margin:30px">
                
                <div Style="float:left; padding-right: 30px;">
                    <Star size="15"/>
                </div>

                <div Style="float:left; 
                            padding-right: 30px;
                            margin-top:-15px;">               
                    <p>Spotlight</p>
                </div>
                 <Star size="15"/>
            </div>
        </Container>

        <CaretLeft size="25" />
            {spotLightData.map((data) => (
                <>
                    <SpotLightBox>
                        <FaceImageHolder />
                        <br />
                        <strong>
                            {data.name}
                        </strong>
                        <br />
                        {data.title}
                        <br />
                    <img Style="float: left" src={TestingPic} height="100" width="100" />
                    </SpotLightBox>
                </>
            ))}
            <CaretRight size="25" />

            <SeeMoreButton>
                See More
            </SeeMoreButton>

            <RankingContainer>
            <h2 Style="color:gold; 
                      text-align:center;
                      font-size: 42px;">Ranking</h2>

            {rankingData.map((data) => (
                <>
                {/* <h1 Style="color:white"> #{data.ranking} </h1> */}
                <RankingBox>
                <h1 Style="color:white; 
                            margin-left: -85px;
                            margin-top: -0px;"> #{data.ranking} </h1> 
                    <FaceImageHolder2 />
                        
                        <RankingBoxText>
                            {data.name} <br /> {data.price} 
                        </RankingBoxText>

                        <ArrowBox>
                            <ChevronRight size="45" color="grey" />
                        </ArrowBox>

                </RankingBox>
                </>
            ))}
            </RankingContainer>
            
            <Newsletter />
            <SeeMore />
            <WhatIsAnNFT />

                
        
        </>
    )

}