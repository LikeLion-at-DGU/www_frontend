import { ProfileContainer, ProfileBox } from "./ArchiveStyle";
import { useState, useEffect } from "react";
import axiosInstance from "../../../src/api/axios";
import TestPro from "../../image/sampleprofile.png"

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
        <img src={TestPro} alt="profile" />
        {/* <img src={userData.profile_img} alt="profile" /> */}
        <p>sha_ppy02</p>
        {/* <p>{userData.nickname}</p> */}
        <span>
          Korea/Bucheon
          {/* {userData.country}/{userData.city} */}
        </span>
      </ProfileBox>
    </ProfileContainer>
  );
};

export default ProfileCard;
