import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Canvas from "./Common/canvas";

const Container = styled.div`
    text-align: center;
`

const OffersContainer = styled.div`
    border: 1px solid black;
`

const OfferBox = styled.div`
    border: 1px solid black;
    width: 250px;
    height: 200px;
    margin: 30px;
`

export default function IncomingRequest () {

    const [isSigning, setIsSigning] = useState(false);

    if (!isSigning) {
    return (
        <>
        <Container>
            <h2>This is the Income Requests Page</h2>

            <p> 
                User / Celeberity Should have to connect their wallet, after that
                a list of all incoming requests is going to have to be pulled from the contract
            </p>

            <h1 Style="text-align: center">Incoming Request</h1>
        </Container>

        <OffersContainer>
            <OfferBox>
                This is some meta
                <ul>
                    <li>To: </li>
                    <li>From: </li>
                    <li>Price: </li>
                </ul>

                <button onClick={() => setIsSigning(true)}>
                    Sign
                </button>
            </OfferBox>
        </OffersContainer>
        </>
    )
    } else if (isSigning) {
        return (
            <>
                <Canvas />
                <button onClick={() => setIsSigning(false)}>
                    Go Back
                </button>
            </>
        )
    }

}