import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import { ROUTES } from "../constants/routes";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 여기에 회원가입 처리 로직을 추가할 수 있습니다.
    alert("회원가입이 완료되었습니다.");
  };

  return (
    <div className={styles.container}>
      <h1>회원가입</h1>
      <form className={styles.signform} onSubmit={handleSubmit}>
        <input
          className={styles.signinput}
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.signinput}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.signinput}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className={styles.signinput}
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button className={styles.signbutton} type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
