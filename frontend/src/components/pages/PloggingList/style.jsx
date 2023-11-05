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

export const Switch  = styled.div`
    width: 170px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    text-align: center;
    margin-bottom: 20px;
`

export const Plogging1 = styled.div`
    border-bottom: solid 2px #38A800;
    width: 50%;
    cursor: pointer;
    color: #38A800;
    font-weight: bolder;
`

export const Review1 = styled.div`
    border-bottom: solid 2px #cccccc;
    width: 50%;
    cursor: pointer;
`
export const Plogging2 = styled.div`
    border-bottom: solid 2px #cccccc;
    width: 50%;
    cursor: pointer;

`

export const Review2 = styled.div`
    border-bottom: solid 2px #38A800;
    width: 50%;
    cursor: pointer;
    color: #38A800;
    font-weight: bolder;

`

export const Lists = styled.div`
    border: solid 2px #cccccc;
    border-radius: 10px;
    //width: 100%;
    height: 150px;
    padding: 20px;

`


export const Placename = styled.div`
    display: flex;
    height: 80px;
    padding-top: 30px;
    font-size: 20px;
    align-self: flex-end;

`

export const Icon = styled.div`
    color: #ffd600;
    margin-right: 10px;
`