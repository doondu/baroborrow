import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import axios from "axios";
import { ROUTES } from "../constants/routes";

const Main = () => {
  const movePage = useNavigate();

  const [logCookie, setLogCookie] = useState(false);

  const loginCheck = () => {
    //로그인 여부따라 변경되는 MainPage 우측 상단 버튼 2개
  };
  const handleMoveLogin = () => {
    movePage(ROUTES.login);
  };
  const handleMoveSignin = () => {
    movePage(ROUTES.signin);
  };
  const handleMoveWrite = () => {
    movePage(ROUTES.write);
  };

  return (
    <div className={styles.page}>
      <header>빌려보나우</header>

      <div className="contentWrap">
        <div className="buttonWrap">
          <span className={styles.login}>
            <button
              onClick={handleMoveLogin}
              disabled={logCookie}
              className="topButton"
            >
              Login
            </button>
          </span>

          <span className={styles.signin}>
            <button
              onClick={handleMoveSignin}
              disabled={logCookie}
              className="topButton"
            >
              Sign In
            </button>
          </span>
        </div>
      </div>
      <body>
        <div
          style={{
            backgroundImage: "url(" + require("../image/map.png") + ")",
          }}
        >
          <button onClick={handleMoveWrite} className="mapButton">
            Write
          </button>
        </div>
      </body>
    </div>
  );
};

export default Main;
