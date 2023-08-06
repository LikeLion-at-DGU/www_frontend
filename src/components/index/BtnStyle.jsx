// BtnStyle

import styled from 'styled-components';

export const BlueBtn = styled.div`
    background-color: #92D3F5;
    border: 1px solid black;
    border-radius: 30px;
    width: 155px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const Shadow = styled.div`
    position: absolute;
    bottom: -5px;
    left: -5px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: black;
    border-radius: 40px;
`