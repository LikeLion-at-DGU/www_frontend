import React, { useEffect, useRef } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
`;

const WhiteBox = styled.div`
  display: flex;
  width: 548px;
  height: 588px;
  background-color: white;
  color: black;
  border: 2px solid #222222;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

const LogoImage = styled.img`
  width: 120px;
  height: auto;
  margin-top: 32px;
  margin-right: 340px;
`;

const FakeButtonWrapper = styled.div`
  width: 385px;
  height: 64px;
  border: 2px solid #92d3f5;
  border-radius: 30px;
  cursor: pointer;
`;

const Text = styled.p`
  display: flex;
  margin-top: 32px;
  margin-right: 142px;
  font-size: 24px;
`;

const LogIn = () => {
  const clientId = import.meta.env.VITE_PUBLIC_GOOGLE_API_KEY;
  const fakeButtonRef = useRef();

  useEffect(() => {
    const startApp = () => {
      if (window.gapi) {
        gapi.load("auth2", function () {
          const auth2 = gapi.auth2.getAuthInstance();
          if (!auth2) {
            gapi.auth2.init({
              client_id: clientId,
              cookiepolicy: "single_host_origin",
            });
          }
          attachSignin(fakeButtonRef.current);
        });
      }
    };

    const attachSignin = (element) => {
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2) {
        auth2.attachClickHandler(
          element,
          {},
          function (googleUser) {
            document.getElementById("name").innerText =
              "Signed in: " + googleUser.getBasicProfile().getName();
          },
          function (error) {
            alert(JSON.stringify(error, undefined, 2));
          }
        );
      }
    };

    startApp();
  }, [clientId]);

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <Container>
      <WhiteBox>
        <LogoImage src="src/image/logo.png" alt="logo" />
        <Text>
          Welcome Back!
          <br />
          Everybody needs your record!
        </Text>
        <GoogleOAuthProvider clientId={clientId}>
          <FakeButtonWrapper>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </FakeButtonWrapper>
        </GoogleOAuthProvider>
      </WhiteBox>
    </Container>
  );
};

export default LogIn;
