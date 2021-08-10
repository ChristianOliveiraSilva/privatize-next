import React, { useState, useRef, useCallback } from 'react'

import Button from '../Button'
import CommentArea from './CommentArea'
import CommentItem from './CommentItem'
import CommentTagHandler from './CommentTagHandler'

import { CommentWrapper } from './style'

import CommentHelpers from './Helpers/commentHelpers'

const buttonStyle = {
    width: '200px',
    height: '50px',
    text: 'Comentar',
    hoverBackgroundColor: '#CACACA',
    hoverColor: 'white',
    backgroundColor: 'gray',
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

    const [checkedTags, setCheckedTags] = useState([])

    const commentItems = useRef([])
    const commentTextArea = useRef()

    const addNewComment = useCallback(() => {
        const text = commentTextArea.current.value

        if (!CommentHelpers.validateCommentText(text)){
            return
        }

        setComments(prev => [{
            id: prev.length + 1,
            user: 'user',
            inserData: '00/00/0000',
            text: text,
            tags: [...checkedTags],
            repplys: []
        }, ...prev])
    },[commentTextArea])
    
    const addNewRepply = useCallback((commentId, text) => {
        if (!CommentHelpers.validateCommentText(text)){
            return
        }

        setComments(prevComments => {
            let newComments = [...prevComments]

            for (var i = 0; i < newComments.length; i++) {
                if (newComments[i].id === commentId) {
                    newComments[i].repplys.unshift({
                        id: commentId + 2,
                        user: 'user',
                        inserData: '00/00/0000',
                        text: text,
                    })              
                }
            }
            return newComments
        })
    }, [])

    const showRepplyHandler = useCallback((newRef) => {
        const prevCommentId = repplyInfo.ref
        const newCommentId = newRef.props.data.id

        if (repplyInfo.isReplying && prevCommentId !== newCommentId) {
            commentItems.current[repplyInfo.ref].hideRepplyHandler()
        }

        repplyInfo.ref = newRef.props.data.id
        repplyInfo.isReplying = true

        setRepplyInfo(repplyInfo)

        newRef.showRepplyHandler()
    }, [repplyInfo, commentItems])

    const CommentItems = () =>  {
        return (
            <React.Fragment>
                {comments.map((e) => 
                    <CommentItem 
                        addNewRepply={ addNewRepply }
                        checkedTags={ checkedTags }
                        onClick={() => showRepplyHandler(commentItems.current[e.id])} 
                        key={e.id} 
                        ref={el => commentItems.current[e.id] = el} 
                        data={e}
                    />
                )}
            </React.Fragment>
        )
    }

    return (
        <CommentWrapper>
            <CommentTagHandler checkedTags={checkedTags} setCheckedTags={setCheckedTags}/>
            <CommentArea innerRef={commentTextArea}/>
            <Button {...buttonStyle} onClick={addNewComment}/>
            {CommentItems()}
        </CommentWrapper>
    )
}

export default Comment
