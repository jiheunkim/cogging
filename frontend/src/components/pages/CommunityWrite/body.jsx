import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import {
    Container, Title, Word, Content, PostButton, Titleinput,
    Info, Place, Maininput, Timeinput, Peopleinput, Chatinput, Placename, Placeinputs,
    Startinput, Finishinput
} from "./style";




const CommunityWrite = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userData,setUserData] = useState([]);

    
    // const postfeed = async () => {
    //     try {
    //         const response = await Api.post('',{
    //             : title,
    //             : content 
    //         });
    //         console.log(response.data);
    //         alert('게시되었습니다.');
    //     } catch (error) {
    //         alert('업로드에 실패했습니다.')
    //         console.error(error)
    //     }
        
    // };

    // const getUser = async () => {
    //     try{
    //         const response = await Api.get('');
    //         setUserData(response.data);
    //         console.log(userData)
    //     }
    //         catch(error){
    //             console.log('유저 정보 가져오기 실패')
    //             console.error(error);   
    //         }
    //     }
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    // useEffect(() => {
    //     getUser();
    // },[])
    

    return (
        <Container className='main-font'>
            <Title>
                <Word>커뮤니티</Word>
                <PostButton>글 올리기</PostButton>
            </Title>
            <Content>
                <Info>
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

export default CommunityWrite;