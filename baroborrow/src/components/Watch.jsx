import React, { useState } from "react";
import { ROUTES } from "../constants/routes";

function PostDetail() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]); // 댓글 배열

  const [isEditMode, setIsEditMode] = useState(false);

  const [commentText, setCommentText] = useState(""); // 댓글 내용
  const [commentAuthor, setCommentAuthor] = useState("사용자1"); // 댓글 작성자

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

  const handleCommentSubmit = () => {
    if (commentText) {
      const newComment = `${commentAuthor}: ${commentText}`;
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  return (
    <div className>
      <header>
        <h1>게시물 제목</h1>
        <p>작성자: 작성자 이름</p>
        {isEditMode ? (
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="도서">도서</option>
            <option value="학용품">학용품</option>
            <option value="기타">기타</option>
          </select>
        ) : (
          <p>카테고리: {selectedCategory || "카테고리를 선택해주세요"}</p>
        )}
      </header>
      <main>
        {isEditMode ? (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="content-box"
          />
        ) : (
          <div className="content-box" onClick={handleEditButtonClick}>
            {content || "게시물 내용이 여기에 들어갑니다."}
          </div>
        )}
      </main>
      {isEditMode && (
        <div className="category-buttons">
          <button onClick={() => handleCategoryClick("도서")}>도서</button>
          <button onClick={() => handleCategoryClick("학용품")}>학용품</button>
          <button onClick={() => handleCategoryClick("기타")}>기타</button>
        </div>
      )}
      {isEditMode ? (
        <button onClick={handleSaveButtonClick}>저장</button>
      ) : (
        <button id="editButton" onClick={handleEditButtonClick}>
          수정
        </button>
      )}
      <div className="comments">
        <h2>댓글</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="댓글 작성…"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
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
