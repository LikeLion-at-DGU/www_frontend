import { styled } from "styled-components";

export const CompanionContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    justify-content: center;
`
export const CompanionList = styled.div`
    display: flex;
    flex-direction: column;
    width: 836px;
    margin-left: 286px;
    border: 1px solid red;
`
export const CompanionNav = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    position: absolute;
    top: 227px;
    left: 155px;
    transition: top 0.5s ease-in-out;
`
export const Continent = styled.div`
    font-size: 24px;
    font-weight: 500;
    border-bottom: 1px solid #222;
    width: fit-content;
`
export const ArrayChoices = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    align-items: center;
    border: 1px solid red;
`
export const ArrayChoice = styled.div`
    font-size: 14.6px;
    font-weight: 700;
    color: #848484;
    /* 호버 다시 수정할 것 */
    :hover{
        color: #2E74B5;
    }
`

// SearchBar
export const SearchType = styled.div`
    width: 115px;
    height: 44px;
    border-top-left-radius: 17.5px;
    border-bottom-left-radius: 17.5px;
    border: 2px solid #222222;
    font-size: 17px;
    font-weight: 700;
    padding-left: 14px;
    display: flex;
    align-items: center;
    background-color: white;
`