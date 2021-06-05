import React from "react";
import styled from "styled-components";
import { Star } from "@styled-icons/boxicons-regular/Star";

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
`

const RankingBox = styled.div`
    background-color: white;
    width: 250px;
    height: 30px;
    padding: 20px;
    margin: 5px;
    margin-left: 25%;
`

export const rankingData = [
    {
        id: 0,
        ranking: "1",
        name: "Micheal Jackson",
        price: "$800",
        image: null,
    },
    {
        id: 1,
        ranking: "2",
        name: "Vitalik Buterin",
        price: "0.2 ETH",
        image: null,
    },
    {
        id: 2,
        ranking: "3",
        name: "Beeple",
        price: "$123",
        image: null,
    },
    {
        id: 3,
        ranking: "4",
        name: "John Lennon",
        price: "$55",
        image: null,
    },
    {
        id: 4,
        ranking: "5",
        name: "Mick Jagger",
        price: "$800",
        image: null,
    },
    {
        id: 5,
        ranking: "6",
        name: "Al Pacino",
        price: "0.2 ETH",
        image: null,
    }
]


export const spotLighhData = [
    {
        id: 0,
        name: "Testing",
        title: "CEO",
        image: null,
    },
    {
        id: 1,
        name: "Testing Two",
        title: "CTO",
        image: null,
    },
    {
        id: 2,
        name: "Testing Three",
        title: "CFO",
        image: null
    }
]


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

            {spotLighhData.map((data) => (
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
                #{data.ranking}
                <RankingBox>
                    {data.name} , {data.price}
                </RankingBox>
                </>
            ))}
            </RankingContainer>

        
        </>
    )

}