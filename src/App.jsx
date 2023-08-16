//App.jsx
import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./GlobalStyle";
import mainbg from "./image/mainbg.png"; //승민이 배경이미지 코드 복붙
import { BackgroundImage } from "./components/background/Backgroundstyle";

function App() {
  /*
  // 브라우저에서 사용자의 기본 언어를 가져옵니다.
  const userLanguage = navigator.language;

  // 언어가 한국어인지 판별합니다.
  const isKorean = userLanguage.startsWith("ko");
  */

  return (
    <>
      {/* <GlobalStyle isKorean={isKorean} /> */}
      <GlobalStyle />
      <BackgroundImage src={mainbg} alt="background-image" />
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
