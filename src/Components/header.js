import React from "react";
import styled from "styled-components";

import  LogoImage from "../Images/ink2.svg";
import LogoText from "../Images/ink-long.svg";
import { ShoppingCart } from "@styled-icons/evaicons-solid/ShoppingCart";

const Container = styled.div`
    ul {
        list-style-type: none;
        display: inline-block;
        margin-top: 29px;
    }

    li {
        float: left;
        margin-left: 20px;
        padding-right: 20px;
        color: grey;
        border-right: 1px solid grey;
    }
    padding-bottom: 80px;

    background-color: blue;
`

const CartButton = styled.div`
    background-color: grey;
    color: white;
    width: 75px;
    height: 25px;
    padding: 5px;
    margin-left: 20px;
    margin-top: 19px;
`

const FloatBox = styled.div`
    float: left;
`

export default function Header () {

    return (
        <>
        <Container>

            <FloatBox>
                <img src={LogoImage} width="75" height="75" />
                <img src={LogoText} width="110" height="75" />
            </FloatBox>
            
            <FloatBox>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Gallery</li>
                <li>Help</li>
            </ul>
            </FloatBox>

            <FloatBox>
            <CartButton>
                <ShoppingCart size="25" />
                Cart
            </CartButton>
            </FloatBox>
        </Container>
        </>
    )

}