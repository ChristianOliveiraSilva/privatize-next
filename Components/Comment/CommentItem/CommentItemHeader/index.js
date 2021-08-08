import React from 'react'
import CommentItemTags from '../CommentItemTags'

import { CommentItemHeaderWrapper, UserName, InsertData, RightContainer } from './style'

function CommentItemHeader() {
    return (
        <CommentItemHeaderWrapper>
            <UserName>User name</UserName>
            <RightContainer>
                <CommentItemTags/>
                <InsertData>00/00/0000</InsertData>
            </RightContainer>
        </CommentItemHeaderWrapper>
    )
}

export default CommentItemHeader
