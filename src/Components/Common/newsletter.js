import React from "react";
import styled from "styled-components";

const Container = styled.div`
    color: #B0B0B1;
    letter-spacing: 1px;
    border-bottom: 1px solid #B0B0B1;
    display: block;
`

const SubscribeBox = styled.div`
    background-color: #EBEBEB;
    text-align: center;
    width: 135px;
    margin-top: 15px;
    height: 25px;
    padding-top: 8px;
    margin-left: 250px;
    margin-top: -34px;
`

const EmailBox = styled.div`
  
    width: 50%;
    margin-bottom: 30px;
    margin-left: 50%;
    margin-top: -6%;
`

const EmailInput = styled.input`
    height: 30px;
    width: 220px;
`

const NewsLetterBox = styled.div`

    width: 35%;
    padding-left: 50px;
    padding-top: 25px;
`

export default function Newsletter () {

    return (
        <>
            <Container>
       
                <NewsLetterBox>
                    <h2>Newsletter</h2>
                    <p>Enter your email to subscribe and get the latest updates</p>
                </NewsLetterBox>
                
                <EmailBox>
                    <EmailInput
                        placeholder={"Enter Your Email"}
                    />
                    <SubscribeBox>
                        Subscribe
                    </SubscribeBox>
                </EmailBox>
           
            </Container>
        </>
    )

}
