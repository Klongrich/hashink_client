import React from "react";
import styled from "styled-components";

const Container = styled.div`
    color: #AAABAA;
    text-align: center;
    letter-spacing: 1px;
    padding-left: 5%;
    padding-right: 10%;
    padding-bottom: 5px;
    margin-bottom: 15px;
    border-bottom: 1px solid #AAABAA;
    border-top: 1px solid #AAABAA;

    h2 {
        font-size: 30px;
    }
`

export default function WhatIsAnNFT () {

    return (
        <>
        <Container>
            <h2> What is an NFT? </h2>

            <p>
                An NFT is a non-fungible token existing on a blockchain. A token is a the sign of ownership of an sset. For 
                example, a concert ticket is a sign of ownership of one space for a concert. <strong>[Learn more] </strong>
            </p>
        </Container>
        </>
    )
}