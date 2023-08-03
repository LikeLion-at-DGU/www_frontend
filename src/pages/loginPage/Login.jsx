// Login.jsx

import React, { useEffect, useRef } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {
  Container,
  WhiteBox,
  LogoImage,
  Text,
  FakeButtonWrapper,
} from "./LoginStyle";

const Login = () => {
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

export default Login;
