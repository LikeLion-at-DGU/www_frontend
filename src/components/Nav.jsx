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
      <LogoImg src={logo} alt="logo" />
      <NavSection to={"/"}>
        World's<br></br>Daily Record
      </NavSection>
      <NavSection to={"/"}>
        Global<br></br>Discussion
      </NavSection>
      <NavSection to={"/"}>
        My<br></br>Archive
      </NavSection>
      <Link to={"join"}>
        <LoginBtn bgcolor="rgba(146, 211, 245, 1)">
          sign in!
          <Shadow />
        </LoginBtn>
      </Link>
    </NavContainer>
  );
};

export default Nav;
