import React from "react";

// 로그인을 할 때 JWT token 을 생성하고 token을 localStorage 에 저장한다. -> 로그인을 유지
// 로그인 성공시, response.MESSAGE + 토큰 발급 유무
//  -> token === true  |  localStaorage 에 login-token이라는 키 값으로 token 저장

export default function Token() {
  // 토큰을 localStorage에 set
  localStorage.setItem("key", token);

  // 토큰을 localStorage에서 get
  localStorage.getItem("key");

  //하단은 로그인 플로우 / 로그인 성공하면, 토큰을 저장함

  handleLogin = () => {
    fetch(`${signinAPI}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      //아래 부분을 fetch 함수의 두 번째 .then()에 작성
      .then((response) => {
        if (response.ACCESS_TOKEN) {
          localStorage.setItem("login-token", response.ACCESS_TOKEN);
        }
      });

    // 하단은 로그인 된 유저들을 확인하기 위해 토큰을 체크함
    fetch(`${API}/login`, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("login-token"),
      },
      body: JSON.stringify({}),
      // 생략
    });
  };
}
