import React, { useEffect, useState } from "react"
import {  BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import map from "./image/map.png";
import axios from "axios";

const Main = () => {
    const movePage = useNavigate();
    
    
    const [logCookie, setLogCookie] = useState(false);

    const loginCheck = () => {
        //로그인 여부따라 변경되는 MainPage 우측 상단 버튼 2개
    }
    const moveLogin = () => {
        movePage('/src/Login');
    }
    const moveSignin = () => {
        movePage('/src/Signin');
    }

    return(
        <div className={styles.page}>

            <header>
                빌려보나우
            </header>

            <div className="contentWrap">
                <div className="buttonWrap">
                    <span className={styles.login}>
                        <button onClick={moveLogin} disabled={logCookie} className="topButton">
                            Login
                        </button>
                    </span> 
                
                    <span className={styles.signin}>
                        <button onClick={moveSignin} disabled={logCookie} className="topButton">
                            Sign In
                        </button>
                    </span> 
                </div> 
            </div>
            <div className="map">
            <img src={map}></img>
            </div>
        </div>
    );
};

export default Main;
