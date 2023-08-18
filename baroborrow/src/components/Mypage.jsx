import React, { useState } from "react";
import { Link } from "react-router-dom";
import NicknameEditPage from "./MypageEdit";
import styles from "./Mypage.module.css";

export default function MyPage() {
  const [editing, setEditing] = useState(false);
  const [nickname, setNickname] = useState("User123");
  const [borrowedCount, setBorrowedCount] = useState(10); // 예시 값, 빌린 횟수
  const [lentCount, setLentCount] = useState(5);
  const [profileImage, setProfileImage] = useState("경로/기본프로필사진.jpg");
  const [posts, setPosts] = useState([
    { id: 1, content: "연필좀 급구", location: "비전타워" },
    { id: 2, content: "아 책 두고 옴", location: "비전타워" },
    { id: 3, content: "칫솔좀", location: "비전타워" },
    { id: 4, content: "치약좀", location: "비전타워" },
    { id: 5, content: "지우개좀", location: "비전타워" },
    // ... 다른 글들 ...
  ]);
  const [comments, setComments] = useState([
    { id: 1, content: "첫 번째 댓글" },
    { id: 2, content: "두 번째 댓글" },
    // ... 다른 댓글들 ...
  ]);

  const handleEdit = (newData) => {
    if (newData.nickname) {
      setNickname(newData.nickname);
    }
    if (newData.profileImage) {
      setProfileImage(newData.profileImage);
    }
    setEditing(false);
  };

  return (
    <div className="my-page-container">
      <h1 className={styles.webpageTitle}>바로 Borrow</h1>
      <div className={styles.profile}>
        <img
          src={profileImage}
          alt="프로필 사진"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2>{nickname}</h2>
          <button onClick={() => setEditing(true)}>프로필 수정</button>
        </div>
        <div className={styles.Count}>
          <p>빌린 횟수: {borrowedCount} 회</p>
          <p>빌려준 횟수: {lentCount} 회</p>
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
                <Link to={`/post/${post.id}`}>
                  <span className={styles.userContentSpan}>{post.content}</span>
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
              <li key={comment.id} className="user-content-list">
                <Link to={`/comment/${comment.id}`}>{comment.content}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
