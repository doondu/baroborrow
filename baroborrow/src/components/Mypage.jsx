import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NicknameEditPage from "./MypageEdit";
import styles from "./Mypage.module.css";
import axios from "axios";
import Cookies from "js-cookie";

export default function MyPage() {
  const [editing, setEditing] = useState(false);
  const [userid, setUserId] = useState("");
  const [nickname, setNickname] = useState("User123");
  const [borrowedCount, setBorrowedCount] = useState(10); // 예시 값, 빌린 횟수
  const [lentCount, setLentCount] = useState(5);
  const [profile, setProfile] = useState({});
  const [profileImage, setProfileImage] = useState("경로/기본프로필사진.jpg");
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const handleEdit = (newData) => {
    if (newData.nickname) {
      setNickname(newData.nickname);
    }
    if (newData.profileImage) {
      setProfileImage(newData.profileImage);
    }
    setEditing(false);
  };

  function getUserId() {
    axios
      .get(
        `https://tsyang.pythonanywhere.com/users/profile/${Cookies.get(
          "userid"
        )}`
      )
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function getUserPost() {
    axios
      .get(
        `https://tsyang.pythonanywhere.com/posts/?author=${Cookies.get(
          "userid"
        )}`
      )
      .then((response) => {
        setPosts([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function getUserComment() {
    axios
      .get(
        `https://tsyang.pythonanywhere.com/comments/?writer=${Cookies.get(
          "userid"
        )}`
      )
      .then((response) => {
        setComments([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getUserComment();
    getUserPost();
    getUserId();
  }, []);

  return (
    <div className="my-page-container">
      <h1 className={styles.webpageTitle}>바로 Borrow</h1>
      <div className={styles.profile}>
        <img
          src={profile.image}
          alt="프로필 사진"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2>{profile.nickname}</h2>
          <button onClick={() => setEditing(true)}>프로필 수정</button>
        </div>
        <div className={styles.Count}>
          <p>빌린 횟수: {profile.borrow_cnt} 회</p>
          <p>빌려준 횟수: {profile.lend_cnt} 회</p>
        </div>
      </div>
      {editing && (
        <div className="edit-modal">
          <NicknameEditPage
            currentNickname={nickname}
            onEdit={handleEdit}
            onCancel={() => setEditing(false)}
          />
        </div>
      )}

      <div className={styles.userContent}>
        <div className={styles.userContentLeft}>
          <h3>내가 작성한 글</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.pk}`}>
                  <span className={styles.userContentSpan}>{post.title}</span>
                  <span className={styles.userContentSpan}>
                    {post.location}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.userContentRight}>
          <h3>내가 작성한 댓글</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.pk} className="user-content-list">
                <Link to={`/posts/${comment.postid}`}>
                  {comment.profile.nickname}
                  {comment.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
