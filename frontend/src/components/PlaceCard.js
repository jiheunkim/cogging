import React, { useState } from 'react';
import '../App.css';



function PlaceCard() {

    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
        <div className='main-font'>
            <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div>
                        <input type="text" name="search" id="search" value={search} onChange={handleSearchChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="검색어를 입력하세요." required="" />
                    </div>
                    <br></br>
                    <p className=''>오늘의 추천 플로깅 장소</p>
                    <div>
                        <div className='flex justify-start'>
                            <img
                            className="w-1/10"
                            src="/image/icon_location.png"
                            />
                            <p className='ml-2'>뚝섬유원지</p>
                        </div>
                        <img
                            className="mt-3"
                            src="/image/place_ex1.png"
                        />
                        <p className='mt-2'>서울 광진구 자양동 112</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default PlaceCard;