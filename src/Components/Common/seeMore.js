import React from "react"
import styled from "styled-components";

import { seeMoreDataOne, seeMoreDataTwo } from "../../Data/homePageData"

import { StarRate} from "@styled-icons/material/StarRate"
import { Star } from "@styled-icons/boxicons-regular/Star"

import StockImage from "../MySig.png";


const Container = styled.div`
    color: #CCCDCC;


    display: inline-block;

    padding-bottom: 50px;
    width: 100%;

`

const LogoContainer = styled.div`
    border: 1px solid #C2C2C2;
    padding: 15px;
    height: 120px;
    width: 210px;
    
    margin-top: 50px;

`

const SeeMoreButton = styled.div`
    color: white;
    background-color: grey;
    padding: 15px;
    width: 200px;
    text-align: center;
    margin-top: -10px;
    margin-bottom: 50px;
    text-align: center;
    margin-left: 35%;
`

const BoxOne = styled.div`
    float: left;
    padding-left: 125px;
    padding-right: 150px;
`

const BoxTwo = styled.div`
    float: left;
`

export default function SeeMore () {

    return (
        <>
        <Container>
            
            <BoxOne>
            {seeMoreDataOne.map((data) => (
                <>
                <LogoContainer>
                <img src={data.image} height="100px" />
                </LogoContainer>
                    {data.name}
                    <StarRate size="17" />
                    <StarRate size="17" />
                    <StarRate size="17" />
                    <Star size="15" />
                    <Star size="15" />
                    <br />
                    {data.price}
                </>
            ))}
            </BoxOne>

            <BoxTwo>
            {seeMoreDataTwo.map((data) => (
                <>
                <LogoContainer>
                    <img src={data.image} height="100px" />
                </LogoContainer>
                    {data.name}
                    <StarRate size="17" />
                    <StarRate size="17" />
                    <StarRate size="17" />
                    <Star size="15" />
                    <Star size="15" />
                    <br />
                    {data.price}
                </>
            ))}
            </BoxTwo>
        </Container>


        <SeeMoreButton>
                See More
        </SeeMoreButton>
        </>
    )
}