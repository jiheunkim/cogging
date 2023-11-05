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
    height: 100px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: solid #cccccc;
`

export const Word = styled.div`
    font-size: 25px;
    align-self: flex-end;
    margin: 5px;
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
    flex-direction: column;

`

export const Liststitle = styled.div`
    border: solid 2px #cccccc;
    display: flex;
    width: 100%;
    margin: 2% 0% 0% 0%;
    border-radius: 10px;
    //width: 100%;
    height: 150px;
    padding: 20px;
    font-size: 17px;
`





export const Placename = styled.div`
    display: flex;
    height: 80px;
    padding-top: 40px;
    font-size: 25px;
    align-self: flex-end;
    margin: 5px;

`
