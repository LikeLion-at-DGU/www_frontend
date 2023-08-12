// MusicPlayer.jsx
import {
  MusicContainer,
  CdImg,
  Player,
  Asap,
  PlayerContainer,
} from "./ArchiveStyle";
import musicplayer from "../../image/musicplayer.png";
import cdimage from "../../image/cdimage.png";
import asap from "../../image/asap.png";

const MusicPlayer = () => {
  return (
    <MusicContainer>
      <p>Now Playing ... </p>
      <Asap src={asap} alt="playing" />
      <PlayerContainer>
        <Player src={musicplayer} alt="music player" />
        <CdImg src={cdimage} alt="cd image" />
      </PlayerContainer>
    </MusicContainer>
  );
};

export default MusicPlayer;
