import React from 'react'
import CommentItemTags from '../CommentItemTags'

import { CommentItemHeaderWrapper, UserName, InsertData } from './style'

function CommentItemHeader() {
    return (
        <CommentItemHeaderWrapper>
            <UserName>User name</UserName>
            <InsertData>00/00/0000</InsertData>
            <CommentItemTags/>
        </CommentItemHeaderWrapper>
    )
}

export default CommentItemHeader
