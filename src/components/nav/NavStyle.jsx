// nav

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 97px;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F2F2;
`
export const LogoImg = styled.img`
    height: 65px;
`
export const NavSection = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 1rem;
    /* 16px */
    font-weight: 700;
    width: 150px;
    height: 42px;
    display: flex;
    justify-content: center;
    text-align: center;
`
// export const LoginBtn = styled.div`
//     background-color: ${props=>props.BgColor};
//     border: 1px solid black;
//     border-radius: 40px;
//     width: 155px;
//     height: 50px;
//     font-size: 20px;
//     font-weight: 700;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
// `
// export const Shadow = styled.div`
//     position: absolute;
//     bottom: -5px;
//     left: -5px;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     background-color: black;
//     border-radius: 40px;
// `