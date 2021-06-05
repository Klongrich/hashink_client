import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 25px;

    ul {
        float:left;
        margin-right: 10px
    }
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
        </>
    )
}