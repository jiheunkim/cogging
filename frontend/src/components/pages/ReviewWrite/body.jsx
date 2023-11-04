import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import {
    Container, Title, Word, Content, PostButton, Titleinput,
    Info, Place, Maininput, Timeinput, Peopleinput, Chatinput, Placename, Placeinputs,
    Startinput, Finishinput
} from "./style";




const Reviewwrite = () => {

    return (
        <Container >
            <Title>
                <Word>장소후기</Word>
                <PostButton>글 올리기</PostButton>
            </Title>
            <Content>
                <Info>
                    <Placename>정동진 해수욕장</Placename>
                    <Titleinput
                        placeholder='제목을 입력하세요.'
                    />
                    <Maininput
                        placeholder='내용을 입력하세요.'
                    />
                </Info>
            </Content>
        </Container>

    );
}

export default Reviewwrite;