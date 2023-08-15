// ContinentsNav.jsx

import React from 'react'
import { Continent, Continents } from './CompanionStyle'

const ContinentsNav = ({ activeBtn, handleBtnClick }) => {
    return (
        <Continents style={{ top: `${258 + scrollY * 0.3}px` }}>
            {/* 지역별 대기환경 ~~ 했던 거처럼 params 이용 ... 하면 될 듯 ... */}
            {/* <Continent onClick={() => navigate(`/companion/${}`)}>대륙명</Continent> */}
            <Continent
                className={activeBtn === 1 ? "active" : ""}
                onClick={() => handleBtnClick(1)}
            >
                Africa
            </Continent>
            <Continent
                className={activeBtn === 2 ? "active" : ""}
                onClick={() => handleBtnClick(2)}
            >
                Asia
            </Continent>
            <Continent
                className={activeBtn === 3 ? "active" : ""}
                onClick={() => handleBtnClick(3)}
            >
                Europe
            </Continent>
            <Continent
                className={activeBtn === 4 ? "active" : ""}
                onClick={() => handleBtnClick(4)}
            >
                Oceania
            </Continent>
            <Continent
                className={activeBtn === 5 ? "active" : ""}
                onClick={() => handleBtnClick(5)}
            >
                North America
            </Continent>
            <Continent
                className={activeBtn === 6 ? "active" : ""}
                onClick={() => handleBtnClick(6)}
            >
                South America
            </Continent>
        </Continents>
    )
}

export default ContinentsNav