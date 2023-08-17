import { ProfileContainer, ProfileBox } from "./ArchiveStyle";
import { useState, useEffect } from "react";
import axiosInstance from "../../../src/api/axios";

const ProfileCard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axiosInstance
      .get("/accounts/profile")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ProfileContainer>
      <p>My Profile</p>
      <ProfileBox>
        <img src={userData.profile_img} alt="profile" />
        <p>{userData.nickname}</p>
        <span>
          {userData.country}/{userData.city}
        </span>
      </ProfileBox>
    </ProfileContainer>
  );
};

export default ProfileCard;
