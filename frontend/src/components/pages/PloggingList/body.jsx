import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../../../App.css';
import {
    Container, Title, Content, PostButton, Lists, Liststitle, Listscontent,
    Info, Icon, Placename, Switch, Plogging1, Review1, Plogging2, Review2
} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';




const PloggingList = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userData, setUserData] = useState([]);
    const [isplogging, setIsplogging] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { place } = location.state;
    const [postlist, setPostlist] = useState([]);


    const token = localStorage.getItem('token')


    const navigateToPlogging = () => {
        navigate('/plogging-write', { state: { place: place } });
    };

    const navigateToReview = () => {
        navigate('/review-write', { state: { place: place } });
    };


    const getUser = async () => {
        try {
            const response = await axios.get('https://f8ee-1-224-68-15.ngrok-free.app/api/member',{
                headers: {
                    'Content-Type': 'application/json',
                    "X-AUTH-TOKEN": token
                },
                withCredentials: true,
                'ngrok-skip-browser-warning': true,
            });
            console.log("성공");
            console.log(response.data);
        } catch (error) {
            console.log('유저 정보 가져오기 실패');
            console.error(error);
        }
    };
    

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onClickPlogging = () => {
        setIsplogging(true)
    }

    const onClickReview = () => {
        setIsplogging(false)
    }

    console.log(place.id)
    
    const getfeed = async () => {
        try {
            const response = await axios.post('https://f8ee-1-224-68-15.ngrok-free.app/api/plogging/list', {
                id: place.id,
            }, {
                headers: {
                    'ngrok-skip-browser-warning': true,
                },
            });
            setPostlist(response.data);
            console.log("리스트성공", postlist);
        } catch (error) {
            alert('글 목록 불러오기에 실패했습니다.');
            console.error(error);
        }
    };

    
    
    

    
    useEffect(() => {
        getUser();
        getfeed();
    }, [])
    return (
        <div className='main-font'>
            {isplogging ? (
                <Container >
                    <Title>
                        <Placename>
                            <Icon>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </Icon>
                            <div>{place.name}</div>
                        </Placename>
                        <PostButton onClick={navigateToPlogging}>글쓰기</PostButton>
                    </Title>
                    <Content>
                        <Info>
                            <Switch>
                                <Plogging1 onClick={onClickPlogging}>같이줍깅</Plogging1>
                                <Review1 onClick={onClickReview}>장소후기</Review1>
                            </Switch>
                            {postlist.map((post, index) => (
                            <Lists>
                                <Liststitle>{post.title}</Liststitle>
                                <Listscontent>
                                    {post.content}
                                </Listscontent>
                            </Lists>
                            ))}

                        </Info>
                    </Content>
                </Container>

            ) : (
                <Container >
                    <Title>
                        <Placename>
                            <Icon>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </Icon>
                            <div>{place.name}</div>
                        </Placename>
                        <PostButton onClick={navigateToReview}>글쓰기</PostButton>
                    </Title>
                    <Content>
                        <Info>
                            <Switch>
                                <Plogging2 onClick={onClickPlogging}>같이줍깅</Plogging2>
                                <Review2 onClick={onClickReview}>장소후기</Review2>
                            </Switch>
                            <Lists>
                                <Liststitle>제목</Liststitle>
                                <Listscontent>
                                    내용
                                </Listscontent>
                            </Lists>
                        </Info>
                    </Content>
                </Container>


            )
            }
        </div>

    );
}

export default PloggingList;