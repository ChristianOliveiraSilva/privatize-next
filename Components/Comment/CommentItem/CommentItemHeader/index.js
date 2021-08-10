import React from 'react'
import Tag from '../../../Tag'

import { CommentItemHeaderWrapper, UserName, InsertData, RightContainer } from './style'

function CommentItemHeader(props) {

    const { tags } = props

    return (
        <CommentItemHeaderWrapper>
            <UserName>User name</UserName>
            <RightContainer>
                <Tag data={tags} />
            </RightContainer>
            <InsertData>00/00/0000</InsertData>
        </CommentItemHeaderWrapper>
    )
}

export default CommentItemHeader
