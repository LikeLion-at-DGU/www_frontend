// Nav.jsx

import { LogoImg, NavContainer, NavSection } from "./NavStyle";
import logo from "../../image/logo.png";
import { BlueBtn } from "../index/BtnStyle";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <NavContainer>
      <Link to={"/"}>
        <LogoImg src={logo} alt="logo" />
      </Link>
      <NavSection to={"record"}>
        World's
        <br />
        Daily Record
      </NavSection>
      <NavSection to={"companion"}>
        Find
        <br />
        My Companion
      </NavSection>
      <NavSection to={"archive"}>
        My
        <br />
        Archive
      </NavSection>
      <Link to={"login"}>
        <BlueBtn bdradius={"40px"}>
          sign in!
          {/* <Shadow /> */}
        </BlueBtn>
      </Link>
    </NavContainer>
  );
};

export default Nav;
