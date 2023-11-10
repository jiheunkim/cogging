import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../Home.css';
import '../Button.css';
import Map from "../Map";
import PlaceCard from '../PlaceCard';



function Home() {

  const [showHeroSection, setShowHeroSection] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 상태
  const insertedToken = localStorage.getItem('token');

  const closePopUp = () => {
    setShowHeroSection(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    if (insertedToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    if (loggedIn) {
      setShowHeroSection(false);
    }
  }, [loggedIn, insertedToken]);

  return (
    <>
      {showHeroSection ? (
        <>
          <div className='main-font text-center'>
                <img
                    className="flex w-full"
                    src={`/image/HeroSection.png`}
                />
                <br></br><br></br><br></br><br></br>
                <img
                    className="mx-auto"
                    src={`/image/Hero-cogging.png`}
                />
                <br></br><br></br><br></br><br></br>
                <button type="submit" className="relative mx-auto button-hero-style" onClick={closePopUp}>메인페이지 바로가기 {'>'}</button>
                <br></br><br></br><br></br><br></br>
            </div>
        </>
      ) : (
        <>
          <div className="kakaomap">
            <Map />
          </div>
          <div className="place-card-container">
            <PlaceCard />
          </div>
        </>
      )}
    </>
  );
}

export default Home;