import React from 'react'
import Repply from '../Repply'
import CommentItemHeader from './CommentItemHeader'
import { CommentItemWrapper, CommentItemText } from './style' 

function CommentItem(props) {

    function getRepply() {
        if (props.repply){
            return (
                <Repply/>
            )
        }

        return null
    }

    function handleClick() {
        
    }

    return (
        <CommentItemWrapper onClick={() => handleClick()} >
            <CommentItemHeader/>
            <CommentItemText>{props.data.text}</CommentItemText>
            {getRepply()}
        </CommentItemWrapper>
    )


}

export default CommentItem
