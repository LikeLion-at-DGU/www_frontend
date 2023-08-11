// Archive.jsx
import { useState, useRef, useEffect } from "react";
import { Container, TopContainer } from "./ArchiveStyle";
import ProfileCard from "./ProfileCard";
import BuddyList from "./BuddyList";
import MusicPlayer from "./MusicPlayer";
import MyFile from "./Myfile";

const Archive = () => {
  return (
    <Container>
      <TopContainer>
        <ProfileCard />

        <BuddyList />

        <MusicPlayer />
      </TopContainer>
      <MyFile />
    </Container>
  );
};

export default Archive;
