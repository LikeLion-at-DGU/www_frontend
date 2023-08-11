//BuddyList.jsx
import BuddyData from "./BuddyData";
import {
  BuddyContainer,
  BuddyBox,
  BuddyBlueBox,
  BuddyDataContainer,
} from "./ArchiveStyle";

const BuddyList = () => {
  return (
    <BuddyContainer>
      <BuddyBox>
        <BuddyBlueBox>
          <p>Buddy List</p>
          <span>31</span>
        </BuddyBlueBox>
        <BuddyDataContainer>
          <BuddyData />
        </BuddyDataContainer>
      </BuddyBox>
    </BuddyContainer>
  );
};
export default BuddyList;
