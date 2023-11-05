import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import {
    Container, Title, Content, PostButton, Lists,
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


    const navigateToPlogging = () => {
        navigate('/plogging-write');
    };

    const navigateToReview = () => {
        navigate('/review-write');
    };

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

    const onClickPlogging = () => {
        setIsplogging(true)
    }

    const onClickReview = () => {
        setIsplogging(false)
    }

    console.log(isplogging)
    // useEffect(() => {
    //     getUser();
    // },[])

    return (
        <div className='main-font'>
            {isplogging ? (
                <Container >
                    <Title>
                        <Placename>
                            <Icon>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </Icon>
                            <div>정동진 해수욕장</div>
                        </Placename>
                        <PostButton onClick={navigateToPlogging}>글쓰기</PostButton>
                    </Title>
                    <Content>
                        <Info>
                            <Switch>
                                <Plogging1 onClick={onClickPlogging}>같이줍깅</Plogging1>
                                <Review1 onClick={onClickReview}>장소후기</Review1>
                            </Switch>
                            <Lists>플로깅 목록</Lists>

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
                            <div>정동진 해수욕장</div>
                        </Placename>
                        <PostButton onClick={navigateToReview}>글쓰기</PostButton>
                    </Title>
                    <Content>
                        <Info>
                            <Switch>
                                <Plogging2 onClick={onClickPlogging}>같이줍깅</Plogging2>
                                <Review2 onClick={onClickReview}>장소후기</Review2>
                            </Switch>
                            <Lists>리뷰 목록</Lists>

                        </Info>
                    </Content>
                </Container>


            )
            }
        </div>

    );
}

export default PloggingList;