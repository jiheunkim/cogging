import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../App.css';
import axios from 'axios';
import {
    Container, Title, Content, Liststitle, Listscontent, Listsbottom, Comcontent,
    Comdate, Comtitle, Word, Commentnum, Date, Commentbox, Commentinput, Comments, Profile
} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import profile from "../../profile.jpg";
import { useParams } from 'react-router-dom';







const CommunityFeed = () => {
    const [title, setTitle] = useState("커뮤니티 글 제목")
    const content = "커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용커뮤니티 글 내용 커뮤니티 글 내용커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용커뮤니티 글 내용 커뮤니티 글 내용커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용 커뮤니티 글 내용"
    const [comment, setComment] = useState("")
    const newcomment = "댓글이 달리면 이렇게 보입니덩 댓글이 달리면 이렇게 보입니덩 댓글이 달리면 이렇게 보입니덩 댓글이 달리면 이렇게 보입니덩"
    const [userData, setUserData] = useState([]);
    const [isplogging, setIsplogging] = useState(true);
    const navigate = useNavigate();
    const [showFullContent, setShowFullContent] = useState(false); // 추가
    const [isEditMode, setIsEditMode] = useState(false);
    const location = useLocation();
    const id = { ...location.state };
    console.log("글 아이디", id.id);
    const [feed, setFeed] = useState([])
    const [nickname, setNickname] = useState("")
    const [author, setAuthor] = useState([]);


    const token = localStorage.getItem('token')




    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const navigateToFix = () => {
        navigate('/community-fix');
    };



    const navigateToWrite = () => {
        navigate('/community-write');
    };


    const formattedDate = (inputDate) => {
        try {
            const date = inputDate.replace('T', ' ').substring(0, inputDate.length - 10);
            return date;
        } catch (error) {
            console.error('Error parsing inputDate:', error);
            return 'Invalid Date';
        }
    };

    const getfeed = async () => {
        try {
            const response = await axios.post('https://f8ee-1-224-68-15.ngrok-free.app/api/community', {
                id: id.id,
            }, {
                withCredentials: true,
                'ngrok-skip-browser-warning': true,

            });
            setFeed(response.data)
            setAuthor(response.data.author.nickname)
            console.log("피드", author);
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

    const [userImages, setUserImages] = useState([
        '/image/profile_1,png',
        '/image/profile_2,png',
        '/image/profile_3,png',
        '/image/profile_4,png',
        '/image/profile_5,png',
    ]);



    const onChangeComment = (e) => {
        setComment(e.target.value)
        console.log(comment)
    }

    const limitedContent = content.length > 100 ? `${content.slice(0, 200)}...더 보기` : content; // 100자로 제한

    useEffect(() => {
        getUser();
        getfeed();
    }, [])

    return (
        <div className='main-font'>
            <Container >
                <Title>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {/* <Profile src={userImages[1]} /> */}
                        <Word>{author}</Word>
                    </div>
                    <div on onClick={navigateToFix} style={{ alignSelf: "flex-end", color: "#999999", fontWeight: "bolder", cursor: "pointer" }}>. . .</div>
                </Title>
                <Content>
                    <Liststitle>{feed.title}</Liststitle>
                    <Listscontent>
                        {feed.content}
                    </Listscontent>
                    <Listsbottom>
                        <Commentnum>
                            <FontAwesomeIcon icon={faComment} style={{ color: "38AF00", marginRight: "5px", marginTop: "3px" }} />
                            <div>{feed.comments}</div>
                        </Commentnum>
                        <Date>{formattedDate(feed.createdAt)}</Date>
                    </Listsbottom>
                </Content>
                <Commentinput>
                    <Commentbox
                        placeholder='댓글을 입력하세요.'
                        onChange={onChangeComment}
                        maxLength={100}
                    />
                    <FontAwesomeIcon icon={faLocationArrow} style={{ color: "#cccccc", fontSize: "35px", marginTop: "8px", marginRight: "20px", cursor: "pointer" }} />
                </Commentinput>
                <Comments>
                    <Comtitle>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Profile src={profile} />
                            <Word>누구누구님</Word>
                        </div>
                        <div style={{ alignSelf: "flex-end", color: "#999999", fontWeight: "bolder", cursor: "pointer" }}>. . .</div>
                    </Comtitle>
                    <Content>
                        <Comcontent>
                            {newcomment}
                        </Comcontent>
                        <Listsbottom>
                            <Comdate>
                                날짜
                            </Comdate>
                        </Listsbottom>
                    </Content>
                </Comments>
            </Container>
        </div>

    );
}

export default CommunityFeed;