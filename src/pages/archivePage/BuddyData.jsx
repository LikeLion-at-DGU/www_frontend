import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
  DataContainer,
  AllData,
  ProfileImage,
  UserName,
  UserNC,
  UserCountry,
  UserCity,
  IconContainer,
} from "./ArchiveStyle";

const dummyData = [
  {
    id: 1,
    profileImage: "url-to-profile-image-1",
    nickname: "smile.kmk",
    country: "South Korea",
    city: "Incheon",
  },
  {
    id: 2,
    profileImage: "url-to-profile-image-2",
    nickname: "miingkko",
    country: "South Korea",
    city: "BuCheon",
  },
  {
    id: 3,
    profileImage: "url-to-profile-image-2",
    nickname: "sha_ppy02",
    country: "South Korea",
    city: "BuCheon",
  },
  {
    id: 4,
    profileImage: "url-to-profile-image-2",
    nickname: "kickcha._",
    country: "South Korea",
    city: "GyeongJu",
  },
  {
    id: 5,
    profileImage: "url-to-profile-image-2",
    nickname: "j_00bh",
    country: "South Korea",
    city: "WonJu",
  },
  {
    id: 6,
    profileImage: "url-to-profile-image-2",
    nickname: "seng_ho_ho",
    country: "South Korea",
    city: "PanGyo",
  },
  {
    id: 7,
    profileImage: "url-to-profile-image-2",
    nickname: "nunnu_nana",
    country: "United States",
    city: "New York",
  },
  {
    id: 8,
    profileImage: "url-to-profile-image-2",
    nickname: "real-kk",
    country: "France",
    city: "Paris",
  },
];

const BuddyData = () => {
  const [dataList, setDataList] = useState(dummyData);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("팔로우를 취소하시겠습니까?");

    if (confirmDelete) {
      const updatedList = [...dataList]; // 복사하여 새 배열 생성
      updatedList.splice(index, 1); // 해당 인덱스의 아이템 제거
      setDataList(updatedList);
    }
  };

  return (
    <AllData style={{ maxHeight: "300px", overflowY: "auto" }}>
      {dataList.map((user, index) => (
        <DataContainer
          key={user.id}
          style={
            index === dataList.length - 1
              ? {
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }
              : {}
          }
        >
          <ProfileImage src={user.profileImage} alt={`img`} />

          <UserName>{user.nickname}</UserName>
          <UserNC>
            <UserCountry>{user.country}</UserCountry>/
            <UserCity>{user.city}</UserCity>
          </UserNC>
          <IconContainer>
            <div>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                style={{ color: "#222222", cursor: "pointer" }}
                onClick={() => handleDelete(index)}
              />
            </div>
          </IconContainer>
        </DataContainer>
      ))}
    </AllData>
  );
};
export default BuddyData;
