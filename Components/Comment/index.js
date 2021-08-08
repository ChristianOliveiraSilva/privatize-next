import React, { useState, useRef, useCallback, memo } from 'react'

import Button from '../Button'
import CommentArea from './CommentArea'
import CommentItem from './CommentItem'

import { CommentWrapper } from './style'

import CommentHelpers from './Helpers/commentHelpers'

const buttonStyle = {
    width: '200px',
    height: '50px',
    text: 'Comentar',
    hoverBackgroundColor: '#CACACA',
    hoverColor: 'white',
    backgroundColor: 'lightgray',
    rounded: true
}

function Comment() {

    let [comments, setComments] = useState([{
        id: 'teste',
        user: 'user',
        inserData: '00/00/0000',
        text: 'teste',
        tags: [],
        repplys: []
    },
    {
        id: 'teste2',
        user: 'user',
        inserData: '00/00/0000',
        text: 'teste',
        tags: [],
        repplys: []
    }])

    let [repplyInfo, setRepplyInfo] = useState({isReplying: false, ref: null })

    const commentItems = useRef([])
    const commentTextArea = useRef()

    const addNewComment = () => {
        const text = commentTextArea.current.value

        if (!CommentHelpers.validateCommentText(text)){
            return
        }

        setComments(prev => [{
            id: prev.length + 1,
            user: 'user',
            inserData: '00/00/0000',
            text: text,
            tags: [],
            repplys: []
        }, ...prev])
    }
    
    const addNewRepply = (commentId, text) => {
        if (!CommentHelpers.validateCommentText(text)){
            return
        }

        for (var i = 0; i < comments.length; i++) {
            if (comments[i].id === commentId) {
                comments[i].repplys.unshift({
                    id: commentId + 2,
                    user: 'user',
                    inserData: '00/00/0000',
                    text: text,
                })              
            }
        }

        setComments([...comments])
    }

    const showRepplyHandler = useCallback((newRef) => {

        const prevCommentId = repplyInfo.ref;
        const newCommentId = newRef.props.data.id

        if (repplyInfo.isReplying && prevCommentId !== newCommentId) {
            commentItems.current[repplyInfo.ref].hideRepplyHandler()
        }

        repplyInfo.ref = newRef.props.data.id
        repplyInfo.isReplying = true

        setRepplyInfo(repplyInfo)

        newRef.showRepplyHandler()
    }, [])

    const CommentItems = () =>  {
        return (
            <React.Fragment>
                {comments.map((e, i) => 
                    <CommentItem 
                        addNewRepply={ addNewRepply } 
                        onClick={() => showRepplyHandler(commentItems.current[e.id])} 
                        key={i} 
                        ref={el => commentItems.current[e.id] = el} 
                        data={e}
                    />
                )}
            </React.Fragment>
        )
    }

    return (
        <CommentWrapper>
            <CommentArea innerRef={commentTextArea}/>
            <Button
                {...buttonStyle}
                onClick={addNewComment}
            />
            <CommentItems/>
        </CommentWrapper>
    )
}

export default Comment
