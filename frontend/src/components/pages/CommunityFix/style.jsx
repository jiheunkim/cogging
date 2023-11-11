import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    //background-color: #fff;
    margin: 0 auto; 
    //min-height: 100vh;
    //margin: 0; /* 바깥 여백을 없애기 위해 설정 */
    //padding: 0; /* 안쪽 여백도 없애기 위해 설정 */
    overflow: hidden; /* 내용이 화면을 벗어나지 않도록 설정 */   
`

export const Title = styled.div`
    display: flex;
    border-bottom: solid #cccccc;
    height: 100px;
    width: 100%;
    justify-content: space-between;
    
     
`

export const Word = styled.div`
    font-size: 25px;
    align-self: flex-end;
    margin: 5px;
    font-weight: bold;
`

export const PostButton = styled.button`
    border: none;
    background-color:#38AF00;
    color: white;
    height: 35%;
    width: 120px;
    border-radius: 10px;
    justify-content: flex-end;
    align-self: flex-end;
    margin: 10px;
    font-size: 10;
`

export const Content = styled.div`
    //height: 85%;
    display: flex;
    width: 100%;
`
export const Info = styled.div`
    display: flex;
    width: 100%;
    margin: 2% 0% 0% 0%;
    flex-direction: column;
`

export const Titleinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    //width: 100%;
    height: 60px;
    padding-left: 20px;
    margin: 2% 0% 2% 0%;
    outline: none;


`
export const Maininput = styled.textarea.attrs({ maxLength: 300 })`
    border: solid 2px #cccccc;
    border-radius: 10px;
    height: 250px; /* 높이 설정 */
    width: 100%; /* 너비 설정 */
    margin: 2% 0% 2% 0%;
    padding: 20px;
    white-space: pre-wrap; /* 줄 바꿈 관련 */
    word-wrap: break-word; /* 긴 단어 줄 바꿈 */
    overflow-wrap: break-word; /* word-wrap 대체 구문 */
    resize: none; /* 크기 조정 비활성화 */
    outline: none;

`

export const Placename = styled.div`
    height: 60px;
    padding-top: 20px;
    font-size: 20px;
`
export const MaxLengthText = styled.span`
    position: absolute;
    bottom: 30px;
    right: 10px;
    color: #999999;
    font-size: 12px; /* 원하는 사이즈로 변경 */
`

export const MainTextarea = styled.div`
    position: relative;
    width: 100%;
`