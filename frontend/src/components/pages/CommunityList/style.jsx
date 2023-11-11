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
    flex-direction: column;
    border: solid 2px #cccccc;
    border-radius: 10px;
    margin: 2% 0% 0% 0%;
    height: 180px;
    cursor: pointer;
`

export const Liststitle = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 30px 0px 30px;
    font-size: 17px;
    height: 50px;
    font-weight: bold
`
export const Listscontent = styled.div`
    display: flex;
    width: 100%;
    //width: 100%;
    /* height: 150px; */
    font-size: 12px;
    height: 70px;
    padding: 10px 30px 0px 30px;
    
`

export const Listsbottom = styled.div`
    display: flex;
    width: 100%;
    padding: 25px 30px 0px 30px;
    height: 40px;
    font-size: 12px;
    flex-direction: row;
`
export const Commentnum = styled.div`
    display: flex;
    width: 60px;
    border-right: solid thin #999999;
    height: 16px;
    color: #38AF00;


`
export const Date = styled.div`
    padding-left: 20px;
    height: 16px;
    color: #999999;
`






export const Placename = styled.div`
    display: flex;
    height: 80px;
    padding-top: 40px;
    font-size: 25px;
    align-self: flex-end;
    margin: 5px;

`
