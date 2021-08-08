import React from 'react'
import { RepplyItemWrapper } from './style'

import CommentItem from '../CommentItem'

function RepplyItem(props) {
    return (
        <RepplyItemWrapper>
            <CommentItem isRepply={true} {...props}/>
        </RepplyItemWrapper>
    )
}

export default RepplyItem
