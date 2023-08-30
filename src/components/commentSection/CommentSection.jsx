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
import { size } from "lodash";
import EditDeleteBtn from "../index/EditDeleteBtn";
import { HideWrapper } from "../index/BtnStyle";
import axiosInstance from "../../api/axios"

// export const CommentSection = () => {
//   const record_id=1;
export const CommentSection = ({ record_id }) => {
  const [cmt, setCmt] = useState("");
  const [hide, setHide] = useState(false);
  const [cmtList, setCmtList] = useState([]);


  const addCmtList = () =>{
    setCmtList([...cmtList,cmt]);
    setCmt("")
  }

  /*
  //댓글 리스트 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axiosInstance
      .get(`/api/records/${record_id}/rcomments/`) // 댓글 리스트 GET URL
      .then((response) => {
        setCmtList(response.data); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [record_id]); // cmtList 값이 변경될 때마다 실행(댓글 추가 될 때마다)

  // useEffect(() => {
  //   // API 요청을 수행하는 부분
  //   axiosInstance
  //     .get(`/api/records/${record.id}/`) // 댓글 리스트 GET URL
  //     .then((response) => {
  //       setCmtList(response.data.record_comments); // 받아온 데이터를 상태에 저장
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []); // cmtList 값이 변경될 때마다 실행(댓글 추가 될 때마다)

  //댓글 리스트 POST
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCmt("");

    try {
      const response = await axiosInstance.post(
        `/api/records/${record_id}/rcomments/`, // 댓글 리스트 POST
        {
          // writer: 1,
          content: cmt,
        }
      );
      
      axiosInstance
        .get(`/api/records/${record_id}/rcomments/`) // 댓글 리스트 GET URL
        .then((response) => {
          setCmtList(response.data); // 받아온 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
*/


  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <Label>
        <ApplyInput
          type="text"
          placeholder="Please enter a comment."
          value={cmt}
          onChange={(e) => setCmt(e.target.value)}
        />
        <ApplyBtn type="submit">apply</ApplyBtn>
        <ApplyBtn onClick={addCmtList}>apply</ApplyBtn>
      </Label>
      {/* </form> */}
      <p>
        {/* 최신순, 좋아요순 구현 전 */}
        <span>New</span> | <span>Most like</span>
      </p>
      <br />

      {cmtList.map((comment, idx) => (
        <CmtBox key={idx}>
          <CmtLabel style={{ alignItems: "end" }}>
            <Wrapper>
              {comment.writer === "smaile.kmk" ? ( //글쓴이인지 확인
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
            <img alt="" src={""} />
            <div>
              <p>user</p>
              <span>korea / seol</span>
            </div>
          </CmtProfile>
          {comment}
        </CmtBox>
      ))}
    </>
  );
};
