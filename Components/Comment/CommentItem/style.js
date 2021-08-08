import styled from 'styled-components'

export const CommentItemWrapper = styled.div `
    border: solid 0.5px lightgray;    
    border-radius: 5px;
    cursor: ${ props => props.isRepply ? 'arrow' : 'pointer' };
    padding: 10px;

    :hover {
        border-color: ${ props => props.isRepply ? 'lightgray' : 'gray' };
    }
`

export const CommentItemText = styled.p `
    
`

export const CommentBody = styled.div `
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-right: 15px;
    margin-top: 10px;
`