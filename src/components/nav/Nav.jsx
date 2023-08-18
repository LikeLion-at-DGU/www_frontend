import { LogoImg, NavContainer, NavSection } from "./NavStyle";
import logo from "../../image/logo.png";
import { BlueBtn } from "../index/BtnStyle";
import { Link } from "react-router-dom";

export const Nav = ({ isMobile }) => {
  return (
    <NavContainer isMobile={isMobile}>
      <Link to={"/"}>
        <LogoImg src={logo} alt="logo" />
      </Link>
      {/* Conditionally render NavSection based on isMobile */}
      {!isMobile ? (
        <>
          <NavSection to={"records"}>
            World's
            <br />
            Daily Record
          </NavSection>
          <NavSection to={"companions"}>
            Find
            <br />
            My Companion
          </NavSection>
          <NavSection to={"archive"}>
            My
            <br />
            Archive
          </NavSection>
        </>
      ) : null}
      <Link to={"login"}>
        <BlueBtn bdradius={"40px"}>sign in!</BlueBtn>
      </Link>
    </NavContainer>
  );
};

export default Nav;
