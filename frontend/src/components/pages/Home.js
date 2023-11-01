import React, { useEffect, useState } from 'react';
import '../../App.css';
import Map from "../Map";



function Home() {

  return (
      <>
      <div className="kakaomap">
        <Map />
      </div>
      </>

  );
}

export default Home;