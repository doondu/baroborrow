import React from 'react';
import styles from './LocationPage.module.css';
import { ROUTES, LocationNameByKey } from '../constants/routes';
import { useParams } from "react-router-dom";

const LocationPage = () => {
  const { location: locationName } = useParams();
  let headerName = '대충오딘가';
  if (!!LocationNameByKey[locationName]) {
    headerName = LocationNameByKey[locationName]
  }
  return (
    <div className={styles.page}>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: '100%',
        height: '4rem',
        lineHeight: '4rem',
        textAlign: "center",
        fontSize: "2rem",
        backgroundColor: "#339af0",
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 20px 0px',
        zIndex: 1,
      }}>
        {headerName}
      </div>

      <div style={{ marginTop: "5rem"}}>
        <div className="list">
        <Item
            productName="가위"
            roomNo="407호"
            ableTimeStart="15:00"
            ableTimeEnd="17:00"
            from="학생회"
          />
          <Item
            productName="가위"
            roomNo="407호"
            ableTimeStart="15:00"
            ableTimeEnd="17:00"
            from="학생회"
          />
          <Item
            productName="가위"
            roomNo="407호"
            ableTimeStart="15:00"
            ableTimeEnd="17:00"
            from="학생회"
          />
          <Item
            productName="가위"
            roomNo="407호"
            ableTimeStart="15:00"
            ableTimeEnd="17:00"
            from="학생회"
          />
          <Item
            productName="가위"
            roomNo="407호"
            ableTimeStart="15:00"
            ableTimeEnd="17:00"
            from="학생회"
          />

        </div>
      </div>
    </div>
  );
}

const Item = (props) => {
  return (
    <div
      style={{
        border: "solid 1px #333",
        borderRadius: '3px',
        boxShadow: '0px 0px 2px #ccc',
        position: 'relative',
        height: 'calc(100px + 1rem)',
      }}
      className="item-wrapper"
    >
      <div
        className="item-leftside"
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '150px',
          height: '100px',
          padding: '0.5rem',
        }}
      >
        <img style={{ width: '100%', height: '100%' }} src={props.imgSrc} />
      </div>
      <div
        className="item-rightsize"
        style={{
          paddingLeft: 'calc(150px + 1.5rem)',
        }}
      >
        <div className="item-title">
          {props.title}
        </div>
        <div className="item-content">
          <div className="item-product-name" style={{ fontSize: '2rem' }}>
            {props.productName}
          </div>
          <div className="item-room-no" style={{ fontSize: '1.25rem' }}>
            {props.roomNo}
          </div>
          <div className="item-able-time" style={{ fontSize: '1.125rem' }}>
            {props.ableTimeStart} ~ {props.ableTimeEnd}
          </div>
          <div className="item-from" style={{ fontSize: '1.25rem' }}>
            {props.from}
          </div>
        </div>
      </div>
    </div>
  )
}


export default LocationPage;
