import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import {
  Container, Title, Word, Content, PostButton, Titleinput,
  Info, Place, Maininput, Timeinput, Peopleinput, Chatinput, Placename, Placeinputs,
  Startinput, Finishinput
} from "./style";




const PloggingWrite = () => {

  return (
    <Container >
      <Title>
        <Word>같이줍깅</Word>
        <PostButton>글 올리기</PostButton>
      </Title>
      <Content>
        <Info>
          <Titleinput
            placeholder='제목을 입력하세요.'
          />
          <Maininput
            placeholder='내용을 입력하세요.'
          />
          <div>일시</div>
          <Timeinput/>
          <div>최대 가능 인원</div>
          <Peopleinput/>
          <div>오픈채팅 링크</div>
          <Chatinput/>
        </Info>
        <Place>
          <Placename>정동진 해수욕장</Placename>
          <Placeinputs>
            <Startinput
              placeholder='출발지 입력'
            />
            <Finishinput
              placeholder='도착지 입력'
            />
          </Placeinputs>
        </Place>
      </Content>
    </Container>

  );
}

export default PloggingWrite;