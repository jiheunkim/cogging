
import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../App.css';
import {
    Container, Title, Word, Content, PostButton, Titleinput,
    Info, Icon, Maininput, Placename
} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';





const Reviewwrite = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userData, setUserData] = useState([]);

    const location = useLocation();
    const { place } = location.state;


    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const postfeed = async () => {
        try {
            const response = await axios.post('https://f8ee-1-224-68-15.ngrok-free.app/api/review/create', {
                title: title,
                content: content,
                placeId: place.id,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    "X-AUTH-TOKEN": token,
                },
                withCredentials: true,

            });
            navigate('/plogging-list', { state: { place: place } });
            console.log(response.data);
            alert('게시되었습니다.');
        } catch (error) {
            alert('업로드에 실패했습니다.')
            console.error(error)
        }

    };

    const getUser = async () => {
        try {
            const response = await axios.get('https://f8ee-1-224-68-15.ngrok-free.app/api/member', {
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

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Container className='main-font'>
            <Title>
                <Word>장소후기</Word>
                <PostButton onClick={postfeed}>글 올리기</PostButton>
            </Title>
            <Content>
                <Info>
                    <Placename>
                        <Icon>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </Icon>
                        <div>{place.name}</div>
                    </Placename>
                    <Titleinput
                        placeholder='제목을 입력하세요.'
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <Maininput
                        placeholder='내용을 입력하세요.'
                        value={content}
                        onChange={onChangeContent}
                    />
                </Info>
            </Content>
        </Container>

    );
}

export default Reviewwrite;