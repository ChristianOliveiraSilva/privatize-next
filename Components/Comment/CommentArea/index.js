import React, { useState } from 'react'
import { CommentText } from './style'

function CommentArea(props) {

    function handleChange (e) {
        props.setValue(e.target.value)
    }

    return (
        <CommentText value={props.value} onChange={(e) => handleChange(e)}>{props.children}</CommentText>
    )
}

export default CommentArea
