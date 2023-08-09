import { styled } from "styled-components";
import { Box } from "../recordPage/RecordStyle";

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
export const SelectType = styled.select`
    width: 130px;
    height: 51px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 2px solid #222222;
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
`
export const SearchInput = styled.input`
    width: 558px;
    height: 51px;
    border: none;
    border-top: 2px solid #222222;
    border-bottom: 2px solid #222222;
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
`
export const SearchBtn = styled.button`
    width: 50px;
    height: 51px;
    border: 2px solid #222222;
    border-left: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: white;
    font-size: 25px;
    font-weight: 700;
    padding-right: 20px;
`
export const NoResult = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    font-weight: 700;
    align-items: center;
`