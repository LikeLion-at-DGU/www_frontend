import { ProfileContainer, ProfileBox } from "./ArchiveStyle";
import logo from "../../image/logo.png";
import sampleprofile from "../../image/sampleprofile.png";

const ProfileCard = ({ userData }) => {
  const dummyUserData = {
    username: "tang_huru",
    userCountry: "Japan",
    userCity: "Tokyo",
    profileImage: sampleprofile,
  };

  const userImage = userData?.profileImage || dummyUserData.profileImage; // 더미 데이터에서 이미지 경로 사용

  return (
    <ProfileContainer>
      <p>My Profile</p>
      <ProfileBox>
        <img src={userImage} alt="profile" />
        <p>{userData?.username || dummyUserData.username}</p>
        <span>
          {userData?.userCountry || dummyUserData.userCountry}/
          {userData?.userCity || dummyUserData.userCity}
        </span>
      </ProfileBox>
    </ProfileContainer>
  );
};

export default ProfileCard;
