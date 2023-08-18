//App.jsx
import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./GlobalStyle";
import mainbg from "./image/mainbg.png"; //승민이 배경이미지 코드 복붙
import { BackgroundImage } from "./components/background/Backgroundstyle";
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <GlobalStyle />
      <BackgroundImage src={mainbg} alt="background-image" />
      <Nav />
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
