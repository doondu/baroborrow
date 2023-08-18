import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Write.module.css";
import { ROUTES } from "../constants/routes";

export default function Write() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [body, setBody] = useState("");
  const [location, setLocation] = useState("");
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [content, setContent] = useState("");
  const handleDeadline = (e) => {
    setDeadlineDate(new Date(e.target.value));
  };
  const handlereturnDate = (e) => {
    setReturnDate(new Date(e.target.value));
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기에 로그인 처리 로직을 추가할 수 있습니다.
    console.log(
      "게시글 정보:",
      title,
      category,
      body,
      location,
      deadlineDate,
      returnDate
    );
  };

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
      <h1 style={{ padding: "15px" }}>게시물 생성</h1>
      <form className={styles.writeform}>
        <div className={styles.writeinner}>
          {" "}
          <h2 style={{ display: "table-cell" }}>제목 &nbsp; </h2>
          <input
            style={{ display: "table-cell" }}
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div className={styles.writeinner}>
          {" "}
          <h2 style={{ display: "table-cell" }}>카테고리 &nbsp;</h2>
          <label>
            <input
              type="radio"
              value="option1"
              checked={category === "option1"}
              onChange={handleCategory}
            />
            학용품&nbsp;
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              checked={category === "option2"}
              onChange={handleCategory}
            />
            도서&nbsp;
          </label>
          <label>
            <input
              type="radio"
              value="option3"
              checked={category === "option3"}
              onChange={handleCategory}
            />
            기타&nbsp;
          </label>
        </div>
        <div className={styles.writeinner}>
          <h2 style={{ display: "table-cell" }}>대여 시간 &nbsp; </h2>
          <input
            style={{ display: "table-cell" }}
            type="datetime-local"
            value={deadlineDate.toISOString().substring(0, 16)} // Format the date to fit datetime-local input
            onChange={handleDeadline}
          />
        </div>
        <div className={styles.writeinner}>
          <h2 style={{ display: "table-cell" }}>반납 기한 &nbsp; </h2>
          <input
            style={{ display: "table-cell" }}
            type="datetime-local"
            value={returnDate.toISOString().substring(0, 16)} // Format the date to fit datetime-local input
            onChange={handlereturnDate}
          />
        </div>
      </form>
      <br />
      <form className={styles.writeform}>
        <h2 className={styles.writeinner}>글쓰기</h2>
        <label>
          내용:
          <textarea
            value={content}
            onChange={handleContent}
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.button}>
          글 작성
        </button>
      </form>
    </div>
  );
}
