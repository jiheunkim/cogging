import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
    width: 70%;
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
`

export const PostButton = styled.button`
    border: none;
    background-color:#00FF00;
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
    flex-direction: row;

`
export const Info = styled.div`
    display: flex;
    width: 60%;
    margin: 2% 2% 0% 0%;
    flex-direction: column;
`

export const Titleinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    //width: 100%;
    height: 40px;
    padding-left: 20px;
    margin: 2% 2% 2% 0%;

`
export const Maininput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    height: 200px;
    margin: 2% 2% 2% 0%;
    padding-left: 20px;
    padding-bottom: 150px;
`

export const Time = styled.div`
    display: flex;
    width: 100%; 
`

    
export const Timeinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    height: 40px;
    margin: 2% 2% 2% 0%;
`

export const Peopleinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    height: 40px;
    margin: 2% 2% 2% 0%;
`

export const Chatinput = styled.input`
    border: solid 2px #cccccc;
    border-radius: 10px;
    height: 40px;
    margin: 2% 2% 2% 0%;
`

export const Place = styled.div`
    width: 40%;
    display: flex;
    margin: 2% 0% 0% 0%;
    flex-direction: column;
`

export const Placename = styled.div`
    height: 80px;
    padding-top: 20px;
`

export const Placeinputs = styled.div`
    display: flex;
    flex-direction: column;
`

export const Startinput = styled.input`
    background-color: #dddddd;
    height: 60px;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 2px solid #cccccc;
    padding-left: 20px; 

`

export const Finishinput = styled.input`
    background-color: #dddddd;
    height: 60px;
    border-radius: 0px 0px 10px 10px;
    padding-left: 20px;     
`