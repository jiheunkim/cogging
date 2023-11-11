import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mapscript } from './Map';
import Map from './Map';
import axios from 'axios';
import '../App.css';



function PlaceCard() {

    const [search, setSearch] = useState('');
    const [places, setPlaces] = useState([]);
    const [info, setInfo] = useState('undefined');
    const [title, setTitle] = useState('오늘의 추천 플로깅 장소');

    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchButtonClick = (e) => {
        axios.get(`https://f8ee-1-224-68-15.ngrok-free.app/api/place/search?keyword=${search}`, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Credentials': true,
                'ngrok-skip-browser-warning': true,
            },
        }).then(function (response) {
            console.log("map 정보 반환", response.data);
            const data = response.data; // response.json() 대신 response.data를 사용
            setPlaces(data);
            setTitle(`${search}의 추천 플로깅 장소`);

            // 데이터를 받아온 후에 Map 컴포넌트에 데이터를 전달
            mapscript(data);
        }).catch(function (error) {
            console.error("오류 발생", error);
        });
    };       

    // 마커 클릭 시 호출될 함수
    const handleMarkerClick = (markerInfo) => {
        // 여기서 markerInfo를 이용하여 마커에 대한 정보를 처리
        console.log("클릭한 마커 정보:", markerInfo);
        setInfo(markerInfo)
        setSearch(markerInfo.name);
        setTitle("");
        setPlaces([markerInfo]);

        // 선택한 지역 정보를 PloggingList 컴포넌트로 전달
        navigate('/plogging-list', { state: { place: markerInfo } });
    };

    useEffect(() => {
        if (search !== '') {
            // axios.get(`https://f8ee-1-224-68-15.ngrok-free.app/api/place/search?keyword=${search}`, {
            // withCredentials: true,
            // headers: {
            //   'Access-Control-Allow-Credentials': true,
            //   'ngrok-skip-browser-warning': true,
            // }}
            // )
            // .then(function (response) {
            //     // response
            //     console.log("map 정보 반환", response.data)
            //     const data = response.json();
            //     setPlaces(data);
            //     setTitle(`'${search}'의 추천 플로깅 장소`);
            // }).catch(function (error) {
            //     // 오류발생시 실행
            // }).then(function() {
            //     // 항상 실행
            // });
        }
    }, [search]);

    return (
        <>
            <div className='main-font'>
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 scroll-box">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="relative">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                value={search}
                                onChange={handleSearchChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="검색어를 입력하세요."
                                required=""
                            />
                            <button
                                className="absolute right-2 top-2"
                                onClick={handleSearchButtonClick}
                            >
                                <img
                                    className="w-5 h-5 mt-1 mr-1"
                                    src="/image/icon_search.png"
                                    alt="Search"
                                />
                            </button>
                        </div>
                        <br></br>
                        <p className=''>{title}</p>
                        {places.length > 0 ? (
                            <>
                                {places.map((place, index) => (
                                <div key={place.id}>
                                    <div className='flex justify-between'>
                                    <div className='flex'>
                                        <img
                                        className="w-1/10"
                                        src="/image/icon_location.png"
                                        />
                                        <p className='ml-2 mt-0.5'>{place.name}</p>
                                    </div>
                                    <div>
                                        <img
                                        className="mt-0.5"
                                        src="/image/scrap_off.png"
                                        />
                                    </div>
                                    </div>
                                    <img
                                    className="mt-3"
                                    src={`/image/place_ex1.png`}
                                    />
                                    <p className='mt-2'>{place.address}</p>
                                    {index !== places.length - 1 && (
                                    <hr className="my-3 border-t border-gray-300" />
                                    )}
                                </div>
                                ))}
                            </>
                        ) : (
                            <>
                                <p className='text-gray-600'>검색 결과가 없습니다.</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div>
            <Map places={places} onMarkerClick={handleMarkerClick} />
            </div>
        </>
    );
}

export default PlaceCard;