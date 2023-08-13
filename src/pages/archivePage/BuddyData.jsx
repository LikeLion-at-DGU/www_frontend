import React from "react";
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
    city: "Seoul",
  },
  {
    id: 2,
    profileImage: "url-to-profile-image-2",
    nickname: "miingkko",
    country: "United States",
    city: "New York",
  },
  {
    id: 3,
    profileImage: "url-to-profile-image-2",
    nickname: "sha_ppy02",
    country: "United States",
    city: "New York",
  },
  {
    id: 4,
    profileImage: "url-to-profile-image-2",
    nickname: "kickcha._",
    country: "United States",
    city: "New York",
  },
  {
    id: 5,
    profileImage: "url-to-profile-image-2",
    nickname: "j_00bh",
    country: "United States",
    city: "New York",
  },
  {
    id: 6,
    profileImage: "url-to-profile-image-2",
    nickname: "seng_ho_ho",
    country: "United States",
    city: "New York",
  },
  {
    id: 6,
    profileImage: "url-to-profile-image-2",
    nickname: "nunnu_nana",
    country: "United States",
    city: "New York",
  },
  {
    id: 6,
    profileImage: "url-to-profile-image-2",
    nickname: "manhae_festival",
    country: "United States",
    city: "New York",
  },

  // Add more dummy data entries as needed
];

const BuddyData = () => {
  return (
    <AllData style={{ maxHeight: "300px", overflowY: "auto" }}>
      {dummyData.map((user, index) => (
        <DataContainer
          key={user.id}
          style={
            index === dummyData.length - 1
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
                style={{ color: "#222222" }}
              />
            </div>
          </IconContainer>
        </DataContainer>
      ))}
    </AllData>
  );
};

export default BuddyData;
