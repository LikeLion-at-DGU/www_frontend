import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Mainpage from "./pages/mainPage/Mainpage";
import { GlobalStyle } from "./GlobalStyle";
import mainbg from "./image/mainbg.png";
import { BackgroundImage } from "./components/background/Backgroundstyle";
import { NavContainer } from "./components/nav/NavStyle";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 460); // Adjusted threshold
    };

    // Initial check and setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      {!isMobile && (
        <BackgroundImage src={mainbg} alt="background-image" />
      )}{" "}
      {/* Added curly braces */}
      {!isMobile && <Nav />}
      <Outlet />
      </>
  );
}

export default App;
