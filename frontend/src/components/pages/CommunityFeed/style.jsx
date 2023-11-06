import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    //background-color: #fff;
    margin: 0 auto 0 auto; 
    //min-height: 100vh;
    //margin: 0; /* 바깥 여백을 없애기 위해 설정 */
    //padding: 0; /* 안쪽 여백도 없애기 위해 설정 */
`

export const Title = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-direction: row;
    padding-right: 10px;
`

export const Word = styled.div`
    font-size: 15px;
    align-self: flex-end;
`


export const Content = styled.div`
    //height: 85%;
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 240px;
`

export const Liststitle = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 20px 0px 0px;
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
    height: 150px;
    padding: 10px 0px 0px 0px;

`

export const Listsbottom = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 20px 0px 0px;
    height: 40px;
    font-size: 12px;
    flex-direction: row;
    border-bottom: solid thin #999999;
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



export const Commentbox = styled.input`
    display: flex;
    margin: auto;
    width: 95%;
    background-color: #EEEEEE;
    height: 50px;
    border-radius: 10px;
    outline: none;
    padding-left: 20px;
    font-size: 13px;
`
export const Commentinput = styled.div`
    display: flex;
    margin: auto;
    width: 99%;
    background-color: #EEEEEE;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
`