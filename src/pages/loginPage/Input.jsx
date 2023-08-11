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
  const [image, setImage] = useState(null);
  const [hover, setHover] = useState(false);
  const [nickname, setNickname] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

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

// 필수요소 체크
  const inputCheck = () => {
    if (
      join.country.value === "none" ||
      join.city.value === "" ||
      join.nickname.value === ""
    ) {
      alert("필수 입력 항목을 전부 입력하세요!");
      return false;
    } else {
      // alert("회원가입 성공");
      navigate("/");
      return true;
    }
  };
  // 프로필 이미지 변경
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);
      }
    };
    const openFilePicker = () => {
      document.querySelector('input[type="file"]').click();
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
          {image ? (
            <Profile
              onClick={openFilePicker}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <span className="material-symbols-outlined">add_a_photo</span>
              ) : (
                "+"
              )}
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ visibility: "hidden" }}
              />
            </Profile>
          ) : (
            <Profile>
              <img src="" alt="선택한 프로필사진" />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ visibility: "hidden" }}
              />
            </Profile>
          )}
        </TopWrapper>
        <Text>Input your information!</Text>
        <form name="join" onSubmit={(e) => e.preventDefault()}>
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
            <SigninBtn onClick={inputCheck}>sign up!</SigninBtn>
          </JoinWrapper>
        </form>
      </WhiteBox>
    </Container>
  );
};

export default Input;
