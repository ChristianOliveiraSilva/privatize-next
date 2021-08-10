import React from 'react'

import Checkbox from '../../Checkbox'

import { CommentTagHandlerWrapper } from './style'

import TagConstants from '../../Tag/Helpers/tagConstants'
import TagMapper from '../../Tag/Helpers/tagMapper'

function CommentTagHandler(props) {

    function addTagToArray(tagValue) {
        debugger
        let newChekedTags = props.checkedTags
        
        const valueIndex = newChekedTags.indexOf(tagValue) 

        if (valueIndex !== -1) {
            newChekedTags.splice(valueIndex, 1)
        } else {
            newChekedTags.push(tagValue)
        }

        props.setCheckedTags(newChekedTags)
    }

    return (
        <CommentTagHandlerWrapper>
            {Object.values(TagConstants.tagTypes).map((e) => 
                <React.Fragment>
                    <Checkbox onChange={ addTagToArray.bind(this, e) } text={TagMapper[e].text} />
                </React.Fragment>
            )}
        </CommentTagHandlerWrapper>
    )
}

export default CommentTagHandler
