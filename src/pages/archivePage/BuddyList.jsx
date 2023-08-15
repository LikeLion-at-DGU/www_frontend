//BuddyList.jsx
import React, { useState, useEffect } from "react";
import BuddyData from "./BuddyData";
import {
  BuddyContainer,
  BuddyBox,
  BuddyBlueBox,
  BuddyDataContainer,
} from "./ArchiveStyle";

const BuddyList = () => {
  const [friendsCount, setFriendsCount] = useState(0);

  // 백엔드에서 팔로우 수를 가져오는 비동기 함수 예시
  const fetchFriendsCount = async () => {
    try {
      // 실제 백엔드 API 호출이 이루어져야 하며, 받아온 데이터로 setFriendsCount를 호출
      const response = await fetch("/api/getFriendsCount");
      const data = await response.json();
      setFriendsCount(data.friendsCount);
    } catch (error) {
      console.error("Error fetching friends count:", error);
    }
  };

  useEffect(() => {
    fetchFriendsCount(); // 컴포넌트가 마운트되면 팔로우 수를 가져오도록 호출
  }, []);

  return (
    <BuddyContainer>
      <BuddyBox>
        <BuddyBlueBox>
          <p>Buddy List</p>
          <span>{friendsCount}</span>
        </BuddyBlueBox>
        <BuddyDataContainer>
          <BuddyData />
        </BuddyDataContainer>
      </BuddyBox>
    </BuddyContainer>
  );
};
export default BuddyList;
