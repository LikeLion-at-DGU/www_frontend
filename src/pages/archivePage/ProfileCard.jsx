// ProfileCard.jsx
import { ProfileContainer, ProfileBox } from "./ArchiveStyle";
import sampleprofile from "../../image/sampleprofile.png";

const ProfileCard = () => {
  return (
    <ProfileContainer>
      <p>My Profile</p>
      <ProfileBox>
        <img src={sampleprofile} alt="profile" />
        <p>username</p>
        <span>userCoumtry/userCity</span>
      </ProfileBox>
    </ProfileContainer>
  );
};

export default ProfileCard;
