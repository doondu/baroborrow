import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Main from "./Main";
import Login from "./Login";
import Signin from "./Signin";
import Write from "./Write";
import Mypage from "./Mypage";
import LocationPage from "./LocationPage";
import Watch from "./Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.signin} element={<Signin />} />
        <Route path={ROUTES.write} element={<Write />} />
        <Route path={ROUTES.mypage} element={<Mypage />} />
        <Route path={ROUTES.locationga} element={<LocationPage />} />
        {/* <Route path={ROUTES.watch} element={<Watch />} /> */}
        <Route path={"/watch/:postId"} element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
