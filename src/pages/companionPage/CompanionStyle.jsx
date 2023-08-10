import { styled } from "styled-components";
import { ListTitle, Text } from "../recordPage/RecordStyle";

export const CompanionContainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
`
export const CompanionList = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 836px; */
    /* margin-left: 286px; */
    width: 1122px;
    padding-left: 286px;
`
export const Continents = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 227px;
    left: 155px;
    transition: top 0.5s ease-in-out;
    :hover{
        box-shadow: inset 0 3.5px 7px rgba(0, 0, 0, 0.25);
        background-color: #FFFFFF;
    };
`
export const Continent = styled.button`
    font-size: 24px;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: #222222;
    width: fit-content;
    padding: 3px 5px;
    margin: 2.5px 0;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    &.active{
        box-shadow: 0 3.5px 7px rgba(0, 0, 0, 0.25);
        background-color: #FFFFFF;
    }
`
export const ArrayChoices = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    align-items: center;
    :hover{
        color: #2E74B5;
    }
`
export const ArrayChoice = styled.div`
    font-size: 14.6px;
    font-weight: 700;
    color: #848484;
    &.active{
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

<<<<<<< HEAD
// CompanionCard
export const CompanionCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 749px;
    height: 124px;
    background-color: #FBFBFB;
    justify-content: space-between;
    align-items: center;
    margin: 4.5px 0;
`
export const CompanionText = styled(Text)`
    justify-content: space-around;
`
export const CompanionTitle = styled(ListTitle)`
    font-size: 1.3rem;
    font-weight: 700;
`
=======
>>>>>>> 58d11ce10a55fd99a35a721bea462371ecabf762
