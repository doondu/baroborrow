import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import { ROUTES } from "../constants/routes";
import Cookies from "js-cookie";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://tsyang.pythonanywhere.com/users/login/",
        {
          username: name,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        const userid = response.data.userid;

        Cookies.set("token", token, { expires: 7 });
        Cookies.set("userid", userid, { expires: 7 });
        console.log("Token received and saved: ", token);
        navigate("/");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
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
