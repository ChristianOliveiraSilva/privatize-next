import React from 'react'
import { TagBase, TagWrapper } from './style'
import PropTypes from 'prop-types'
import tagMapper from './Helpers/tagMapper'

export function Tag ({ data }) {
    function getTags () {
        return (
            data.map((tagtype, i) => {
                const tag = tagMapper[tagtype];
                return (
                    <TagWrapper key={i} color={tag.color}>
                        <span >{tag.text}</span>
                    </TagWrapper>
                )
            })
        )
    }

    if (Array.isArray(data) && data.length > 0) {
        return (
            <TagBase>
                {getTags()}
            </TagBase>
        )
    }

    return null
}

Tag.propTypes = {
    data: PropTypes.array
}

export default Tag
