import React, {useState, useEffect} from "react";
import styled from "styled-components";

const SubscribeBox = styled.div`
    background-color:grey;
    padding:15px;
    text-align: center;
    width: 175px;
    margin-top: 15px;
`

const EmailInput = styled.input`
    height: 25px;
`

export default function Newsletter () {

    const [email, setEmail] = useState("Email Address")

    useEffect(() => {
        console.log(email);
    })

    return (
        <>
            <h2>Newsletter</h2>
            <p>This is just some filler text for now</p>
            <EmailInput
                placeholder={email}
            />
            <SubscribeBox>
                Subscribe
            </SubscribeBox>
        </>
    )

}