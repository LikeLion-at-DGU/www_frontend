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
import axiosInstance from "../../../src/api/axios";

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

  // 회원가입 폼 제출을 처리하는 함수
  const inputCheck = async () => {
    if (
      join.country.value === "none" ||
      join.city.value === "" ||
      join.nickname.value === ""
    ) {
      alert("필수 입력 항목을 모두 입력하세요!");
      return;
    }

    try {
      const response = await axiosInstance.put("/accounts/save_user", {
        country: country,
        city: city,
        nickname: nickname,
      });

      if (response.status === 200) {
        alert("회원가입 성공!");
        navigate("/");
      } else {
        alert("회원가입 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
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
              <option value="republic of korea">republic of korea</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Nigeria">Nigeria</option>
              <option value="South Africa">South Africa</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Denmark">Denmark</option>
              <option value="Germany">Germany</option>
              <option value="Laos">Laos</option>
              <option value="Russia">Russia</option>
              <option value="Romania">Romania</option>
              <option value="Mexico">Mexico</option>
              <option value="Maldives">Maldives</option>
              <option value="Mongolia">Mongolia</option>
              <option value="USA">USA</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Belgium">Belgium</option>
              <option value="Brazil">Brazil</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Sweden">Sweden</option>
              <option value="Swiss">Swiss</option>
              <option value="Spain">Spain</option>
              <option value="Argentina">Argentina</option>
              <option value="Iceland">Iceland</option>
              <option value="Ireland">Ireland</option>
              <option value="UK">UK</option>
              <option value="Austria">Austria</option>
              <option value="Egypt">Egypt</option>
              <option value="Italia">Italia</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="Canada">Canada</option>
              <option value="Thailand">Thailand</option>
              <option value="Portugal">Portugal</option>
              <option value="Poland">Poland</option>
              <option value="France">France</option>
              <option value="Philippines">Philippines</option>
              <option value="Hungary">Hungary</option>
              <option value="Australia">Australia</option>
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
