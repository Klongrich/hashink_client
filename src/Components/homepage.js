import React from "react";
import styled from "styled-components";

import Newsletter from "./Common/newsletter";
import SeeMore from "./Common/seeMore";
import WhatIsAnNFT from "./Common/whatIsAnNft";

import { Star } from "@styled-icons/boxicons-regular/Star";
import  { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight"
import {rankingData, spotLightData} from "../Data/homePageData";

const SpotLightBox = styled.div`
    border: 1px solid black;
    padding: 25px;
    margin-left: 10px;
    display: inline-block;
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

const RankingContainer = styled.div`
    background-color: grey;
    padding: 20px;
`

const RankingBox = styled.div`
    background-color: white;
    width: 250px;
    height: 30px;
    padding: 20px;
    margin: 5px;
    margin-left: 25%;
`

export default function HomePage () {

    return (
        <>
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

            {spotLightData.map((data) => (
                <SpotLightBox>
                    {data.name} , {data.title}
                </SpotLightBox>
            ))}

            <SeeMoreButton>
                See More
            </SeeMoreButton>

            <RankingContainer>
            <h2 Style="color:gold; text-align:center">Ranking</h2>

            {rankingData.map((data) => (
                <>
                <h1 Style="color:white"> #{data.ranking} </h1>
                <RankingBox>
                    {data.name} , {data.price} <ChevronRight size="45" color="grey" />
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