import React, { useEffect, useState } from "react";
import { ROUTES } from "../constants/routes";
import { useParams } from "react-router-dom";
import styles from "./Watch.module.css";
import axios from "axios";
import Cookies from "js-cookie";

function PostDetail() {
  const { postId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]); // 댓글 배열
  const [data, setData] = useState("");
  const [profile, setProfile] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  const [commentList, setCommentList] = useState([]);
  const [commentText, setCommentText] = useState("");

  function getNotice() {
    axios
      .get(`https://tsyang.pythonanywhere.com/posts/${postId}`)
      .then((response) => {
        setData(response.data);
        setProfile(response.data.profile);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function getCommets() {
    axios
      .get(`https://tsyang.pythonanywhere.com/comments/?post=${postId}`)
      .then((response) => {
        setCommentList([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getNotice();
    getCommets();
  }, []);
  const handleCategoryClick = (category) => {
    if (isEditMode) {
      setSelectedCategory(category);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleSaveButtonClick = () => {
    setIsEditMode(false);
    // 변경된 카테고리와 내용을 저장하는 로직 추가 가능
  };

  const handleCommentSubmit = async (e) => {
    // e.preventDefault();

    try {
      const response = await axios.post(
        "https://tsyang.pythonanywhere.com/comments/",
        {
          postid: postId,
          text: commentText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + Cookies.get("token"),
          },
        }
      );
      getCommets();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className>
      <header>
        <h1 className={styles.textblue400}>{data.title}</h1>
        <hr></hr>
        <h1>{data.title}</h1>
        <p>{profile.title}</p>
        <p className={styles.textdetail}>작성자: {profile.nickname}</p>
      </header>
      <main>
        <div className={styles.contentbox} onClick={handleEditButtonClick}>
          {data.body}
        </div>
      </main>
      <div className={styles.comments}>
        <h2>댓글</h2>
        <ul>
          {commentList.map((e) => (
            <li key={e.pk}>
              <span>{e.profile.nickname}</span>
              <span>:</span>
              <span>{e.text}</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="댓글 작성…"
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleCommentSubmit();
            }
          }}
        />
      </div>
    </div>
  );
}

export default PostDetail;
