import { styled } from "styled-components";
import { BlueBtn, BookMarkStyle, Shadow, ViewsStyle } from "../../components/index/BtnStyle";
import Views from "../../components/index/Views";

// Record 메인페이지 스타일
export const RecordContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5vw;
`
export const Box = styled.div`
    display: flex;
    flex-direction: ${props => props.FlexDirect};
    width: 100%;
    height: ${props => props.Height};
    justify-content: ${props=>props.JusCon};
    margin: 10px 0;
    /* border: 1px solid red; */
`
export const Box2 = styled(Box)`
    justify-content: space-evenly;
`
export const Btn = styled(BlueBtn)`
    display: flex;
    border-radius: 10px;
    width: 262px;
    height: 51px;
    margin: 10px 0;
    font-size: 1.1rem;
    background-color: ${props => props.BgColor};
`
export const BtnShadow = styled(Shadow)`
    border-radius: 10px;
`
export const SubTitle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 15px 0;
    width: fit-content;
    align-items: center;
`

// FriendCards 스타일, Cards 공통 스타일
export const FriendCard = styled.div`
    border-radius: 20px;
    width: 453px;
    /* 453px */
    height: 158px;
    /* 158px */
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`
export const CardBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 122px;
    overflow: hidden;
`
export const Img = styled.div`
    display: flex;
    width: ${props=>props.Width};
    height: ${props=>props.Height};
    object-fit: cover;
    position: relative;
`
export const RecordImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props=>props.Radius};
    border-top-left-radius: ${props=>props.LeftRadius};
`
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props=>props.Padding};
    width: ${props=>props.Width};
    height: ${props=>props.Height};
    position: relative;
`
export const Writer = styled.p`
    /* position: relative; */
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    height: min-content;
    align-items: center;
`
export const ProfileImg = styled.div`
    /* position: absolute; */
    /* top: -5px; */
    height: 100%;
    /* width: 15px; */
    border: 1px solid black;
    border-radius: 15px;
    background-color: #3EBD6B;
    margin: 0 5px;
    padding: 2px 10px;
`
export const City = styled.p`
    font-size: 0.6rem;
    /* 10px */
    font-weight: 500;
    color: #8E44AD;
    padding-left: 30px;
`
export const Title = styled.p`
    font-size: 1.25rem;
    /* 20px */
    font-weight: 500;
`
export const Content = styled.p`
    font-size: ${props=>props.FontSize};
    font-weight: 400;
    height: ${props=>props.Height};
`
export const TagBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${props=>props.Padding};
    justify-content: ${props=>props.JusCon};
`
export const HashTag = styled.div`
    display: flex;
    background-color: #F2F2F2;
    color: #2E74B5;
    border-radius: 20px;
    font-size: 0.75rem;
    /* 12px */
    font-weight: 400;
    margin: 5px;
    padding: 5px;
    /* width: min-content; */
`

// TodayCards 스타일
export const TodayCard = styled(FriendCard)`
    width: 548px;
    height: 335px;
`
export const BigImage = styled(RecordImage)`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`
export const TodayTitle = styled.p`
    font-size: 1.5rem;
    /* 24px */
    font-weight: 700;
`
export const ProfileImg2 = styled(ProfileImg)`
    padding: 10px;
`

// ListCards 스타일
export const ListCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 1120px;
    height: 142px;
    background-color: #FBFBFB;
    justify-content: space-between;
`
export const ListTitle = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 700;
    height: 25px;
`
export const BtnBox = styled(TagBox)`
    height: 20px;
    width: 20%;
`
export const View = styled(BookMarkStyle)`
    width: 30%;
    /* 95px */
    height: 100%;
    /* 40px */
    color: #2e74b5;
`
export const Comment = styled(BookMarkStyle)`
    width: 30%;
    height: 100%;
    color: #3ebd6b;
`
export const Bookmark = styled(BookMarkStyle)`
    width: 50px;
    height: 40px;
    position: absolute;
    top: 15px;
    right: 15px;
`

// LocalPicks 스타일
export const LocalPick = styled.div`
    display: flex;
    flex-direction: row;
`
export const InTagBox = styled(TagBox)`
    position: absolute;
    top: 15px;
    left: 15px;
`