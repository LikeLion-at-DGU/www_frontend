// Nav.jsx

import { LoginBtn, LogoImg, NavContainer, NavSection, Shadow } from "./NavStyle";
import logo from "../image/logo.png";

export const Nav = () => {
  return (
    <NavContainer>
      <LogoImg src={logo} alt="logo" />
      <NavSection to={"/"}>World's<br></br>Daily Record</NavSection>
      <NavSection to={"/"}>Global<br></br>Discussion</NavSection>
      <NavSection to={"/"}>My<br></br>Archive</NavSection>
      <LoginBtn BgColor="rgba(146, 211, 245, 1)">
        sign in!
        <Shadow />
      </LoginBtn>
    </NavContainer>
  );
};

export default Nav;