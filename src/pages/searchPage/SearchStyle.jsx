import { styled } from "styled-components";
import { BigImage, Box, FriendCard, Title } from "../recordPage/RecordStyle";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5vw;
`
export const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    margin-top: 45px;
    margin-bottom: 40px;
`
export const Box3 = styled(Box)`
    /* justify-content: space-between; */
    width: 1122px;
`
export const SelectType = styled.select`
    width: 115px;
    height: 44px;
    border-top-left-radius: 17.5px;
    border-bottom-left-radius: 17.5px;
    border: 2px solid #222222;
    font-size: 17px;
    font-weight: 700;
    padding-left: 14px;
`
export const SearchInput = styled.input`
    width: 527px;
    height: 44px;
    border: none;
    border-top: 2px solid #222222;
    border-bottom: 2px solid #222222;
    font-size: 17px;
    font-weight: 700;
    padding-left: 13px;
`
export const SearchBtn = styled.button`
    width: 50px;
    height: 44px;
    border: 2px solid #222222;
    border-left: none;
    border-top-right-radius: 17.5px;
    border-bottom-right-radius: 17.5px;
    background-color: white;
    font-size: 20px;
    font-weight: 700;
    padding-right: 7px;
`
export const NoResult = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    font-weight: 700;
    align-items: center;
`
// 검색 결과 컴포넌트
export const SearchResult = styled(FriendCard)`
    width: 357px;
    height: 122px;
    display: flex;
    flex-direction: row;
`
export const SmallImage = styled(BigImage)`
    border-top-right-radius: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`
export const SearchTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
`