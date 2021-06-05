import React from "react"
import styled from "styled-components";

import { seeMoreData } from "../../Data/homePageData"

const Container = styled.div`
    border: 1px solid black;
    padding: 15px;
    heigh: 220px;
    width: 150px;
`

const SeeMoreButton = styled.div`
    color: white;
    background-color: grey;
    padding: 15px;
    width: 200px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

export default function SeeMore () {

    return (
        <>
            <h2>See More</h2>

            {seeMoreData.map((data) => (
                <>
                <Container>
                    Put Box here
                </Container>
                    {data.name} , {data.rating}
                    <br />
                    {data.price}
                </>
            ))}

            <SeeMoreButton>
                See More
            </SeeMoreButton>
        </>
    )
}