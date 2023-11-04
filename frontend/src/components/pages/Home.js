import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../Home.css';
import Map from "../Map";
import PlaceCard from '../PlaceCard';



function Home() {

  return (
    <>
      <div className="kakaomap">
        <Map />
      </div>
      <div className="place-card-container">
        <PlaceCard />
      </div>
    </>
  );
}

export default Home;