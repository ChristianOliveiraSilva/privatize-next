import styled from 'styled-components'

export const Content = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    max-width: 625px;
    margin-left: 10%;


    @media (max-width: 600px){
        margin-left: auto;
        position: absolute;
        width: 90%;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%);
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height: 45px;
    color: #333;
    font-weight: 700;

    @media (max-width: 600px){
        font-size: 28px;
        line-height: 30px;
    }
`

export const Subtitle = styled.p`
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    word-break: break-word;
`

export const Img = styled.img`
    width: 510px;
    height: 360px;
`

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
`

export default Content