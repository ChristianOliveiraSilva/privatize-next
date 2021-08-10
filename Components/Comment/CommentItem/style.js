import styled from 'styled-components'

export const CommentItemWrapper = styled.div `
    position: relative;
    border: solid 0.5px lightgray;    
    border-radius: 5px;
    cursor: ${ props => props.isRepply ? 'arrow' : 'pointer' };
    padding: 20px;

    :hover {
        border-color: ${ props => props.isRepply ? 'lightgray' : 'gray' };
    }
`

export const CommentItemText = styled.p `
`

export const CommentBody = styled.div `
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-right: 120px;
    margin-top: 5px;
    margin-bottom: 20px;

`