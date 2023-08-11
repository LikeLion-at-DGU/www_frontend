// // CompanionNav.jsx

// import React, { useEffect, useState } from 'react'
// import { Continent, Continents } from './CompanionStyle';

// function CompanionNav({ onReset }) {

//     // 좌측 nav active
//     const [activeBtn, setActiveBtn] = useState(null);
    
//     const handleBtnClick = (btnId) => {
//         setActiveBtn(btnId);
//     };

//     // 좌측 nav 스크롤 반응형
//     const [scrollY, setScrollY] = useState(0);

//     const handleScroll = () => {
//         setScrollY(window.scrollY);
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         // 반응형으로 떠있는 nav
//         <Continents style={{ top: `${258 + scrollY * 0.5}px` }}>
//             {/* 지역별 대기환경 ~~ 했던 거처럼 params 이용 ... 하면 될 듯 ... */}
//             {/* <Continent onClick={() => navigate(`/companion/${}`)}>대륙명</Continent> */}
//             <Continent
//                 className={activeBtn === 1 ? 'active' : ""}
//                 onClick={() => {
//                     handleBtnClick(1);
//                     onReset();
//                 }}
//             >
//                 Africa
//             </Continent>
//             <Continent
//                 className={activeBtn === 2 ? 'active' : ""}
//                 onClick={() => {
//                     handleBtnClick(2);
//                     onReset();
//                 }}
//             >
//                 Asia
//             </Continent>
//             <Continent
//                 className={activeBtn === 3 ? 'active' : ""}
//                 onClick={() => {
//                     handleBtnClick(3);
//                     onReset();
//                 }}
//             >
//                 Europe
//             </Continent>
//             <Continent
//                 className={activeBtn === 4 ? 'active' : ""}
//                 onClick={() => {
//                     handleBtnClick(4);
//                     onReset();
//                 }}
//             >
//                 Oceania
//             </Continent>
//             <Continent
//                 className={activeBtn === 5 ? 'active' : ""}
//                 onClick={() => {
//                     handleBtnClick(5);
//                     onReset();
//                 }}
//             >
//                 North America
//             </Continent>
//             <Continent
//                 className={activeBtn === 6 ? 'active' : ""}
//                 onClick={() => {
//                     handleBtnClick(6);
//                     onReset();
//                 }}
//             >
//                 South America
//             </Continent>
//         </Continents>
//     )
// }

// export default CompanionNav;