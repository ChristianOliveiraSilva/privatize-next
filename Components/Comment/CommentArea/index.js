import React, { useState, useCallback } from 'react'
import { CommentText } from './style'

function CommentArea(props) {
    const [value, setValue] = useState()

    return (
        <CommentText ref={props.innerRef} value={value} onChange={(e) => setValue(e.target.value)}>{props.children}</CommentText>
    )
}

export default CommentArea