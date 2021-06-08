import React , {useState} from  "react";
import styled from "styled-components";

import HomePage from "./Components/homepage"
import RequestPage from "./Components/request_page"
import SigningPage from "./Components/artist_page";
import IncomingRequest from "./Components/incoming_request";
import GalleryPage from "./Components/gallery"
import Footer from "./Components/footer"

import  LogoImage from "./ink2.svg";
import LogoText from "./ink-long.svg";
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

function App() {

  const [pageState, setPageState] = useState("homepage");

  function Header () {
    return (
        <>
        <Container>

            <FloatBox>
                <img src={LogoImage} width="75" height="75" alt="LogoImage"/>
                <img src={LogoText} width="110" height="75" alt="LogoText" />
            </FloatBox>
            
            <FloatBox>
            <ul>
                <li onClick={() => setPageState("homepage")}>Home</li>
                <li onClick={() => setPageState("drawing")}>Shop</li>
                <li onClick={() => setPageState("gallery")}>Gallery</li>
                <li onClick={() => setPageState("incomingRequest")}> Help</li>
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

  if (pageState === "homepage") {
  return (
    <>
      <Header />
        <HomePage />
      <Footer />
      <button onClick={() => setPageState("drawing")}>
        Go To Signing Page
      </button>
    </>
  );
  } else if (pageState === "drawing") {
    return (
      <>
        <Header />
          <RequestPage />
        <Footer />
        <button onClick={() => setPageState("signing")}>
          Go Back To Home Page
        </button>
      </>
    )
  } else if (pageState === "signing") {
    return (
      <>
        <Header />
          <SigningPage />
        <Footer />
        <button onClick={() => setPageState("homepage")}>
          Go Back To Home Page
        </button>
      </>
    )
  } else if (pageState === "incomingRequest") {
    return (
      <>
        <Header />
          <IncomingRequest />
        <Footer />
        <button onClick={() => setPageState("homepage")}>
          Go Back To Home Page
        </button>
      </>
    )
  } else if (pageState === "gallery") {
    return (
      <>
        <Header />
          <GalleryPage />
        <Footer />
      </>
    )
  }
}

export default App;
