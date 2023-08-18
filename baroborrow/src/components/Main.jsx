import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import axios from "axios";
import { ROUTES } from "../constants/routes";
import Cookies from "js-cookie";

const Main = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const [notAllow, setNotAllow] = useState(false);

  const loginCheck = () => {
    if (token) {
      setNotAllow(true);
    } else {
      setNotAllow(false);
    }
    //로그인 여부따라 변경되는 MainPage 우측 상단 버튼 2개
  };
  const handleMoveLogin = () => {
    navigate(ROUTES.login);
  };
  const handleMoveSignin = () => {
    navigate(ROUTES.signin);
  };
  const handleMoveWrite = () => {
    navigate(ROUTES.write);
  };
  const handleMoveMyPage = () => {
    navigate(ROUTES.mypage);
  };
  useEffect(() => {
    loginCheck();
  }, []);
  return (
    <div className={styles.page}>
      <div className="contentWrap">
        <div className="buttonWrap">
          <span className={styles.login}>
            {notAllow ? (
              <button onClick={handleMoveMyPage} className="topButton">
                MyPage
              </button>
            ) : (
              <button onClick={handleMoveLogin} className="topButton">
                Login
              </button>
            )}
          </span>

          <span className={styles.signin}>
            {notAllow ? (
              <button onClick={handleMoveSignin} className="topButton">
                Sign Out
              </button>
            ) : (
              <button onClick={handleMoveSignin} className="topButton">
                Sign In
              </button>
            )}
          </span>
        </div>
      </div>

      <br></br>

      <header className={`${styles.header} ${styles.headerText}`}>
        빌려보나우
      </header>
      <br></br>
      <br></br>
      <div
        className={styles.map}
        style={{ backgroundImage: "url(" + require("../image/map.png") + ")" }}
      >
        <button className={styles.mapButton1}>기숙사</button>
        <button className={styles.mapButton2}>AI관</button>
        <button className={styles.mapButton3}>중도&학생회관</button>
        <button className={styles.mapButton4}>교대</button>
        <button className={styles.mapButton5}>예체대</button>
        <button className={styles.mapButton6}>글센&공대1&산협2</button>
        <button
          className={styles.mapButton7}
          onClick={() => {
            navigate(`${ROUTES.locationga}`);
          }}
        >
          가천관
        </button>
        <button className={styles.mapButton8}>전정도</button>
        <button className={styles.mapButton9}>바나연</button>
        <button className={styles.mapButton10}>비타</button>
      </div>
    </div>
  );
};

export default Main;
