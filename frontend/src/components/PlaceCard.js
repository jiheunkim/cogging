import React, { useState, useEffect } from 'react';
import '../App.css';



function PlaceCard() {

    const [search, setSearch] = useState('');
    const [places, setPlaces] = useState([]);
    const [title, setTitle] = useState('오늘의 추천 플로깅 장소');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchButtonClick = (e) => {
        setSearch(e.target.value);
        fetchData();
    };    

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/place/search?keyword=${search}`);
            const data = await response.json();
            setPlaces(data);
            setTitle(`'${search}'의 추천 플로깅 장소`);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (search !== '') {
            // fetchData();
        }
    }, [search]);

    return (
        <>
            <div className='main-font'>
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlaceCard;