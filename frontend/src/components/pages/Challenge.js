import React, { useState } from 'react';
import '../../App.css';
import '../Challenge.css';



function Challenge() {

  return (
      <>
        <div className='flex mx-auto justify-center'>
            <p className='title-font mt-20 mb-3'>도전과제</p>
        </div>
        <div className='main'>
            <div className="white-box">
                <label htmlFor="chg1">열심히 열심히</label>
                <div className='flex justify-start ml-10 mr-10'>
                    <img
                    className="chg-coin"
                    alt='chg1'
                    src="/image/badge_1.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg1'
                    src="/image/badge_3.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg1'
                    src="/image/badge_5.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg1'
                    src="/image/badge_10.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg1'
                    src="/image/badge_50.png"
                    />
                </div>
            </div>
            <div className="white-box">
                <label htmlFor="chg2">바다의 왕자</label>
                <div className='flex justify-start ml-10 mr-10'>
                    <img
                    className="chg-coin"
                    alt='chg2'
                    src="/image/badge_beach_1.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg2'
                    src="/image/badge_beach_2.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg2'
                    src="/image/badge_beach_3.png"
                    />
                </div>
            </div>
            <div className="white-box">
                <label htmlFor="chg3">산토끼 토끼야</label>
                <div className='flex justify-start ml-10 mr-10'>
                    <img
                    className="chg-coin"
                    alt='chg3'
                    src="/image/badge_mt_1.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg3'
                    src="/image/badge_mt_2.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg3'
                    src="/image/badge_mt_3.png"
                    />
                </div>
            </div>
            <div className="white-box">
                <label htmlFor="chg4">공원 수집가</label>
                <div className='flex justify-start ml-10 mr-10'>
                    <img
                    className="chg-coin"
                    alt='chg4'
                    src="/image/badge_park_1.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg4'
                    src="/image/badge_park_2.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg4'
                    src="/image/badge_park_3.png"
                    />
                </div>
            </div>
            <div className="white-box">
                <label htmlFor="chg5">플로깅 마스터</label>
                <div className='flex justify-start ml-10 mr-10'>
                    <img
                    className="chg-coin"
                    alt='chg5'
                    src="/image/badge_seoul.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg5'
                    src="/image/badge_gyeonggi.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg5'
                    src="/image/badge_busan.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg5'
                    src="/image/badge_jeju.png"
                    />
                    <img
                    className="chg-coin"
                    alt='chg5'
                    src="/image/badge_gwd.png"
                    />
                </div>
            </div>
        </div>
        
      </>

  );
}

export default Challenge;