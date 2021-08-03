import React, { useState } from 'react'

import Button from '../Button'
import CommentArea from './CommentArea'
import CommentItem from './CommentItem'

import { CommentWrapper } from './style'

import CommentHelpers from './Helpers/commentHelpers'

function Comment() {

    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState('')

    const addNewComment = () => {

        if (!CommentHelpers.validateCommentText(commentText)){
            return
        }

        setComments(prev => [...prev, { 
            user: 'user',
            inserData: '00/00/0000',
            text: commentText,
            tags: [],
            repply: false
        }])
    }

    function CommentItems() {
        return (
            <React.Fragment>
                {comments.map((e) => <CommentItem data={e}/>)}
            </React.Fragment>
        )
    }

    return (
        <CommentWrapper>
            <CommentArea value={commentText} setValue={setCommentText}/>
            <Button
                width='200px'
                height='50px'
                text='Comentar'
                hoverBackgroundColor='#CACACA'
                hoverColor='white'
                backgroundColor='lightgray'
                rounded
                onClick={addNewComment}
            />
            <CommentItems/>
        </CommentWrapper>
    )
}

export default Comment
