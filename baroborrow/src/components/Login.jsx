import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import { ROUTES } from "../constants/routes";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기에 로그인 처리 로직을 추가할 수 있습니다.
    console.log("로그인 정보:", name, password);
  };

  return (
    <div className={styles.container}>
      <h1>로그인</h1>
      <form className={styles.loginform} onSubmit={handleSubmit}>
        <input
          className={styles.logininput}
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.logininput}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginbutton} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}
