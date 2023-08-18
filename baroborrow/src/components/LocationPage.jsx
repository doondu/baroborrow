import React, { useEffect, useState } from "react";
import styles from "./LocationPage.module.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ROUTES, LocationNameByKey } from "../constants/routes";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const LocationPage = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [councilDataList, setCouncilDataList] = useState([]);
  const { location: locationName } = useParams();
  let headerName = "가천관";

  function getNotice() {
    axios
      .get("https://tsyang.pythonanywhere.com/posts/?location=가천대학교")
      .then((response) => {
        setDataList([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://tsyang.pythonanywhere.com/council_posts/?location=가천대학교"
      )
      .then((response) => {
        setCouncilDataList([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getNotice();
  }, []);
  if (!!LocationNameByKey[locationName]) {
    headerName = LocationNameByKey[locationName];
  }

  return (
    <div className={styles.page}>
      <div
        style={{
          //position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "4rem",
          lineHeight: "4rem",
          textAlign: "center",
          fontSize: "3rem",
          fontfamily: "Arial, sans-serif",
          //padding-top: "50px",
          //   backgroundColor: "royalblue",
          //   boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 20px 0px",
          //   zIndex: 1,
          color: "royalblue",
          marginbottom: "100px",
        }}
      >
        {headerName}
        <button type="submit" style={{ float: "right" }}>
          글작성
        </button>
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <ul className="list">
          {councilDataList.map((e) => (
            <Item
              key={e.pk}
              id={e.pk}
              title={e.title}
              category={e.category}
              location={e.council}
            />
          ))}
          <br></br>
          <br></br>
          <br></br>
          {dataList.map((e) => (
            <Item
              key={e.pk}
              id={e.pk}
              title={e.title}
              category={e.category}
              location={e.location}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Item = (props) => {
  const navigate = useNavigate();
  return (
    <div
      // onClick={() => {
      //   navigate(ROUTES.watch);
      // }}
      style={{
        border: "solid 1px #333",
        borderRadius: "3px",
        boxShadow: "0px 0px 2px #ccc",
        position: "relative",
        height: "calc(100px + 3rem)",
      }}
      className="item-wrapper"
    >
      {/* <div
        className="item-leftside"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "150px",
          height: "100px",
          padding: "0.5rem",
        }}
      >
        <img style={{ width: "100%", height: "100%" }} src={props.imgSrc} />
      </div> */}
      <div
        className="item-rightsize"
        style={{
          padding: "1rem",
        }}
      >
        <div className="item-content">
          <div className="item-product-name" style={{ fontSize: "2rem" }}>
            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
              }}
              to={`/watch/${props.id}`}
            >
              {props.title}
            </Link>
          </div>
          <div className="item-room-no" style={{ fontSize: "1.25rem" }}>
            {props.category}
          </div>
          <div className="item-from" style={{ fontSize: "1.25rem" }}>
            {props.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
