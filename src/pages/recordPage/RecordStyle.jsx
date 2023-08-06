import { styled } from "styled-components";

export const RecordContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5vw;
`
export const RecordBox = styled.div`
    display: flex;
    flex-direction: ${props=>props.FlexDirect};
    border: 1px solid red;
`