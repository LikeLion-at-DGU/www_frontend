// Nav.jsx

import { LogoImg, NavContainer, NavSection } from "./NavStyle";
import logo from "../../image/logo.png";
import { BlueBtn, Shadow } from "../index/BtnStyle";

export const Nav = () => {
  return (
    <NavContainer>
      <LogoImg src={logo} alt="logo" />
      <NavSection to={"/"}>World's<br />Daily Record</NavSection>
      <NavSection to={"/"}>Global<br />Discussion</NavSection>
      <NavSection to={"/"}>My<br />Archive</NavSection>
      <BlueBtn BdRadius={"40px"}>
        sign in!
        <Shadow />
      </BlueBtn>
    </NavContainer>
  );
};

export default Nav;