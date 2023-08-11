import React from 'react'
import { CompanionCard, CompanionText, CompanionTitle } from './CompanionStyle'
import { BtnBox, Content, Image, Img } from '../recordPage/RecordStyle'
import CompanionImg from "../../image/companion.png"
import CountryName from '../../components/index/Country'
import CityName from '../../components/index/CityName'
import DateName from '../../components/index/DateName'
import { WwwBox } from '../mainPage/MainpageStyle'
import Views from '../../components/index/Views'
import Comments from '../../components/index/Comments'
import Like from '../../components/index/Like'
import { useNavigate } from 'react-router-dom'


function CompanionCards() {
  const navigate = useNavigate();

  return (
    <CompanionCard onClick={() => navigate("/companion/1")}>
      <CompanionText width="626px" height="124px" padding="10px 20px">
        <CompanionTitle>
          <p>Today Hanoi nightscape!!</p>
          <p style={{ color: "#848484", fontSize: "0.8rem" }}>23m ago</p>
        </CompanionTitle>

        <WwwBox>
          <CountryName handleheight="20px" handlefsize="0.8rem" />
          <CityName handleheight="20px" handlefsize="0.8rem" />
          <DateName handleheight="20px" handlefsize="0.8rem" />
        </WwwBox>
        <Content>
          <p>Let’s play together in Hanoi nightscape festival!</p>
        </Content>
        <BtnBox juscon="space-between">
          <Views
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
          />
          <Comments
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
          />
          <Like
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
          />
        </BtnBox>
      </CompanionText>
      <Img width="122px" height="122px">
        <Image src={CompanionImg} />
      </Img>
    </CompanionCard>
  );
}

export default CompanionCards