import React from 'react'
import { TagBase, TagContainer } from './style'
import PropTypes from 'prop-types'
import tagMapper from './Helpers/tagMapper'

export function Tag ({ data }) {
    function getTags () {
        return (
            data.map((tagtype, i) => {
                const tag = tagMapper[tagtype];
                return (
                    <TagContainer key={i} color={tag.color}>
                        <span >{tag.text}</span>
                    </TagContainer>
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
