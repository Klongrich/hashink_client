import React from "react";
import styled from "styled-components";

import LogoText from "../Images/ink-long.svg";
import LogoImage from "../Images/ink2.svg";

const Container = styled.div`
    padding: 25px;
    margin-left: 38%;
    margin-top: -35px;

    color: #C6C7C6;

    ul {
        float:left;
        margin-right: 10px;
    }

    li {
        list-style-type: none;
        padding-top: 10px;
    }
`

const LogoContainer = styled.div`
    margin-right: 80%;
    margin-bottom: 150px;
`

export default function Footer () {

    return (
        <>
        <Container>
        <ul>
            <p> MAIN MENU </p>
            <li>Home</li>
            <li>Shop</li>
            <li>Gallery</li>
            <li>Help</li>
        </ul>

        <ul>
            <p> DISCOVER </p>
            <li>The Team</li>
            <li>Our History</li>
            <li>Brand Motto</li>
        </ul>

        <ul>
            <p> FIND US ON </p>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
        </Container>

        <LogoContainer>
            <img src={LogoImage} height="150" width="75" alt="LogoImage" />
            <img src={LogoText} height="150" width="75" alt="LogoText" />
        </LogoContainer>
        </>
    )
}