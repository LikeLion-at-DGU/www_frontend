// Nav.jsx

import {
  LoginBtn,
  LogoImg,
  NavContainer,
  NavSection,
  Shadow,
} from "./NavStyle";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <NavContainer>
      <Link to={"/"}>
        <LogoImg src={logo} alt="logo" />
      </Link>
      <NavSection to={"record"}>
        World's<br></br>Daily Record
      </NavSection>
      <NavSection to={"discussion"}>
        Global<br></br>Discussion
      </NavSection>
      <NavSection to={"archive"}>
        My<br></br>Archive
      </NavSection>
      <Link to={"login"}>
        <LoginBtn bgcolor="rgba(146, 211, 245, 1)">
          sign in!
          <Shadow />
        </LoginBtn>
      </Link>
    </NavContainer>
  );
};

export default Nav;
