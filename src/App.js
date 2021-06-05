import React , {useState} from  "react";

import Header from "./Components/header"
import HomePage from "./Components/homepage"
import RequestPage from "./Components/request_page"
import Footer from "./Components/footer"

function App() {

  const [pageState, setPageState] = useState("homepage");

  if (pageState == "homepage") {
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
  } else if (pageState == "drawing") {
    return (
      <>
        <Header />
          <RequestPage />
        <Footer />
        <button onClick={() => setPageState("homepage")}>
          Go Back To Home Page
        </button>
      </>
    )
  }
}

export default App;
