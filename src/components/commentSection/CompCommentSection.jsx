import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  ApplyBtn,
  ApplyInput,
  Label,
  CmtBox,
  CmtLabel,
  CmtProfile,
} from "./CmtStyle";
import { Wrapper } from "../WrapStyle";
import Like from "../index/Like";
import FriendMark from "../index/FriendMark";
import Mine from "../index/Mine";
import { BtnWrapper } from "../../pages/detailPage/DetailStyle";
import axiosInstance from "../../api/axios";
import { size } from "lodash";
import EditDeleteBtn from "../index/EditDeleteBtn";
import { HideWrapper } from "../index/BtnStyle";


export const CompCommentSection = ({ compenionId }) => {
  const [cmt, setCmt] = useState("");
  const [hide, setHide] = useState(false);
  const [cmtList, setCmtList] = useState([
    {
      profileImg: "",
      userNmae: "smaile.kmk",
      nation: "Italy/milano",
      comment: "I think it is absolutely possible.",
    },
    {
      profileImg: "",
      userNmae: "giogio222",
      nation: "Republic of Korea/seoul",
      comment: "I think it is absolutely possible????!?!?!?!",
    },
  ]);

  //댓글 리스트 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axiosInstance
      .get(`/api/records/${compenionId}/rcomments`) // 댓글 리스트 GET URL
      .then((response) => {
        setCmtList(...cmtList, response.data); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [cmtList]); // cmtList 값이 변경될 때마다 실행(댓글 추가 될 때마다)

  //댓글 리스트 POST
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post(
        `/api/records/${record_id}/rcomments`, // 댓글 리스트 POST
        {
          cmt,
        }
      );
      console.log("Post created:", response.data);
      // 추가 동작
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const cmtHandleChange = (e) => {
    setCmt(e.target.value);
  };
  /* 백연결
  const addCmtList = () => {
    setCmtList(() => [
      ...cmtList,
      {
        profileImg: "",
        userNmae: "smaile.kmk",
        nation: "Italy/milano",
        comment: cmt,
      },
    ]);
  };
*/

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label>
          <ApplyInput
            type="text"
            placeholder="Please enter a comment."
            value={cmt}
            onChange={cmtHandleChange}
          />
          <ApplyBtn type="submit">apply</ApplyBtn>
          {/* <ApplyBtn onClick={addCmtList}>apply</ApplyBtn> */}
        </Label>
      </form>
      <p>
        {/* 최신순, 좋아요순 구현 전 */}
        <span>New</span> | <span>Most like</span>
      </p>
      <br />

      {cmtList.map((comment, idx) => (
        <CmtBox key={idx}>
          <CmtLabel style={{ alignItems: "end" }}>
            <Wrapper>
              {comment.userNmae === "smaile.kmk" ? ( //글쓴이인지 확인
                <BtnWrapper>
                  <Mine />
                  <HideWrapper onClick={() => setHide(hide ? false : true)}>
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      style={{
                        padding: "0 10px 10px 15px",
                        fontSize: "1.3rem",
                      }}
                    />
                    {hide && <EditDeleteBtn />}
                  </HideWrapper>
                </BtnWrapper>
              ) : (
                <FriendMark />
              )}
            </Wrapper>
            <Like handlewidth={"69px"} handleheight={"32px"} />
          </CmtLabel>
          <CmtProfile>
            <img alt="profile img" src={comment.profileImg} />
            <div>
              <p>{comment.userNmae}</p>
              <span>{comment.nation}</span>
            </div>
          </CmtProfile>
          {comment.comment}
        </CmtBox>
      ))}
    </>
  );
};
