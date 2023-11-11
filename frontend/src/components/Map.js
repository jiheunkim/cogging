import React, { useEffect } from 'react';

const { kakao } = window;

export const mapscript = (places, onMarkerClick) => {
  let container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(36.524915253753194, 127.65122688059974),
    level: 12,
  };

  // 지도 생성
  const map = new kakao.maps.Map(container, options);

  // 마커 이미지 생성
  const markerImage = new kakao.maps.MarkerImage(
    '/image/mapicon_location.png',
    new kakao.maps.Size(24, 35),
  );

  // 장소 배열이 존재하는지 확인 후 순회
  if (places && Array.isArray(places)) {
    places.forEach((place) => {
      let markerPosition = new kakao.maps.LatLng(
        place.latitude,
        place.longitude
      );

      // 마커 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      // 지도에 마커 표시
      marker.setMap(map);

      // 마커 클릭 이벤트
      kakao.maps.event.addListener(marker, 'click', function () {
        // 클릭한 마커의 정보를 PlaceCard.js로 전달
        onMarkerClick(place);
      });
    });
  }
};

const Map = ({ places, onMarkerClick }) => {
  useEffect(() => {
    if (places) {
      mapscript(places, onMarkerClick);
    }
  }, [places]);

  return <div id="map" style={{ width: "100%", height: "880px" }}></div>;
};

export default Map;
