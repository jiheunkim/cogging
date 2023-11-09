import React, { useEffect, useState } from 'react';
import '../App.css';


const { kakao } = window;

export default function Map() {
    useEffect(() => {
      mapscript();
    }, []);
  
    const mapscript = () => {
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(36.124915253753194, 129.15122688059974),
        level: 12,
      };
      //map
      const map = new kakao.maps.Map(container, options);

      // 마커 이미지를 생성하고 색상을 변경
      const markerImage = new kakao.maps.MarkerImage(
        '/image/mapicon_location.png',
        new kakao.maps.Size(24, 35),
      );
  
      //마커가 표시 될 위치
      let markerPosition = new kakao.maps.LatLng(
        37.62197524055062,
        127.16017523675508
      );
  
      // 마커를 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });
  
      // 마커를 지도 위에 표시
      marker.setMap(map);
    };
  
    return <div id="map" style={{ width: "1920px", height: "1020px" }}></div>;
  }