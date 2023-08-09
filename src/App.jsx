//App.jsx
import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./GlobalStyle";
import mainbg from "./image/mainbg.png"; //승민이 배경이미지 코드 복붙
import { BackgroundImage } from "./components/background/Backgroundstyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage src={mainbg} alt="background-image" />
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
