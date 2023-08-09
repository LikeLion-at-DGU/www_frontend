//Input.jsx
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  WhiteBox,
  LogoImage,
  Text,
  InputForm,
  InputForm2,
  JoinWrapper,
  JoinTxt,
  SigninBtn,
  Profile,
  TopWrapper,
} from "./LoginStyle";

const Input = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  const cityHandleChange = (e) => {
    setCity(e.target.value);
    console.log(city);
  };
  const nicknameHandleChange = (e) => {
    setNickname(e.target.value);
    console.log(nickname);
  };
  const countryhandleChange = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };
  const languagehandleChange = (e) => {
    setLanguage(e.target.value);
    console.log(language);
  };
  const [hover, setHover] = useState(false);

  const inputCheck = () => {
    if (
      join.country.value === "none" ||
      join.city.value === "" ||
      join.nickname.value === ""
    ) {
      alert("필수 입력 항목을 전부 입력하세요!");
      return false;
    } else {
      alert("회원가입 성공");
      navigate("/");
      return true;
    }
  };
  return (
    <Container>
      <WhiteBox>
        <TopWrapper>
          <LogoImage
            onClick={() => navigate("/")}
            src="src/image/logo.png"
            alt="logo"
          />
          <Profile
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? (
              <span className="material-symbols-outlined">add_a_photo</span>
            ) : (
              "+"
            )}
          </Profile>
        </TopWrapper>
        <Text>Input your information!</Text>
        <form name="join" onSubmit={(e)=>e.preventDefault()}>
          <JoinWrapper>
            <InputForm
              name="country"
              value={country}
              onChange={countryhandleChange}
            >
              <option value="none">Country</option>
              <option value="rKorea">republic of korea</option>
              <option value="rKorea">republic of korea</option>
              <option value="rKorea">republic of korea</option>
            </InputForm>
            <InputForm2
              type="text"
              name="city"
              value={city}
              onChange={cityHandleChange}
              placeholder="city"
            />
            <JoinTxt>Use only small english letter/No space</JoinTxt>
            <InputForm2
              type="text"
              name="nickname"
              value={nickname}
              onChange={nicknameHandleChange}
              placeholder="nickname"
            />
            <JoinTxt>
              Use only small english letter/Up to 17 letters
              <br /> No space/ only (.)and(_) available
            </JoinTxt>
            <SigninBtn onClick={ inputCheck }>
              sign up!
            </SigninBtn>
          </JoinWrapper>
        </form>
      </WhiteBox>
    </Container>
  );
};

export default Input;
