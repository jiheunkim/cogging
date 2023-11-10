import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../../App.css';
import {
    Container, Title, Word, Content, PostButton, Titleinput,
    Info, Place, Maininput, Timeinput, Peopleinput, Chatinput, Placename, Placeinputs,
    Startinput, Finishinput, MaxLengthText, MainTextarea
} from "./style";




const CommunityWrite = () => {
    const [comtitle, setComtitle] = useState("")
    const [comcontent, setComcontent] = useState("")
    const [userData, setUserData] = useState([]);

    const token = localStorage.getItem('token')
    

    const postfeed = async () => {
        try {
            const response = await axios.post('https://20ab-39-125-96-44.ngrok-free.app/api/community/create',{
                title: comtitle,
                content: comcontent,
            }, {
                'Content-Type' : 'application/json',
                "X-AUTH-TOKEN": token, 
            });
            console.log(response.data);
            alert('게시되었습니다.');
        } catch (error) {
            alert('업로드에 실패했습니다.')
            console.error(error)
        }

    };

    
    const getUser = async () => {
        try {
            const response = await axios.get('https://20ab-39-125-96-44.ngrok-free.app/api/member', {
                headers: {
                    "X-AUTH-TOKEN": token
                },
                'withCredentials': true
            });
            console.log("성공");
            setUserData(response.data);
            console.log(userData);
        } catch (error) {
            console.log('유저 정보 가져오기 실패');
            console.error(error);
        }
    };
    
    
    // const getUser = async () => {
    //     try{
    //         const response = await axios.get('https://983d-39-125-96-44.ngrok-free.app/members/list');
    //         console.log("전체 유저 성공")
    //         setUserData(response.data);
    //         console.log(userData)
    //     }
    //         catch(error){
    //             console.log('유저 정보 가져오기 실패')
    //             console.error(error);   
    //         }
    //     }

    const onChangeTitle = (e) => {
        setComtitle(e.target.value)
    }

    const onChangeContent = (e) => {
        setComcontent(e.target.value)
    }

    useEffect(() => {
        getUser();
    },[])


    return (
        <Container className='main-font'>
            <Title>
                <Word>커뮤니티</Word>
                <PostButton onClick={postfeed}>글 올리기</PostButton>
            </Title>
            <Content>
                <Info>
                    <Titleinput
                        placeholder='제목을 입력하세요.'
                        value={comtitle}
                        onChange={onChangeTitle}
                    />
                    <MainTextarea>
                        <Maininput
                            placeholder='내용을 입력하세요.'
                            value={comcontent}
                            onChange={onChangeContent}
                        />
                        <MaxLengthText>최대 300자</MaxLengthText>
                    </MainTextarea>
                </Info>
            </Content>
        </Container>

    );
}

export default CommunityWrite;