import styled from 'styled-components'

export const Content = styled.div`
    width: 50%;

    @media (max-width : 1350px){
        min-width: 100%;
    }

`

export const Icon = styled.img`
    width: 40px;
    height: 40px;
    justify-self: center;
    align-self: center;

    @media (max-width: 600px) {
        display: none;
    }
`

export const Text = styled.span`
    align-self: center;
    font-size: 18px;


    @media (max-width: 1000px) {
        font-size: 16px;
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }

    @media (max-width: 400px) {
        font-size: 12px;
    }
`

export const TagContainer = styled.div`
    justify-items: end;
    margin-bottom: 15px;
`

export const DateInformation = styled.div`

    position: absolute;
    right: 0;
    top: 0;

    span{
        font-size: 15px;
    }

`
export const Coments = styled.div`
    width: 100%;
`

export const Comment = styled.div`
    word-break: break-word;
`

export const CommentBody = styled.div`
    display: grid;
    grid-template-columns: 100px auto;

    @media (max-width: 600px) {
        grid-template-columns: auto;
    }
`

export const MainBody = styled.div`
    display: grid;
    grid-template-columns: 100px auto;

    @media (max-width: 600px) {
        grid-template-columns: auto;
    }
`

export const Rep = styled.div`
    margin-top: 20px;
`

export const Replys = styled.div`

    display: flex;
    flex-direction: column;

    #bodyContainer {
        width: 100%;
        margin-top: 25px;
        margin-left: 50px;
        width: calc(100% - 50px);        
    }    
    
`

export const TextArea = styled.textarea`
    border-radius: 20px;
    padding: 20px;
    width: 100%;

    outline: none;
`

export const Options = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`
export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;

    div {
        margin-left: 15px;
    }
`
export const CommentContainer = styled.div`
    padding: 20px;
    border-radius: 25px;
    cursor: pointer;

    :hover {
        background-color: #FBFBFB;
    }
`
