import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BaseButton } from './style'

function Button (props) {
    let [selected, setSelected] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor)

    const handleClick = () => {
        if (props.selectable) {
            select()
        }

        return props.onClick ? props.onClick() : null
    }

    const select = () => {
        selected = !selected
        setSelected(selected)
        setBackgroundColor(prev => selected ? props.selectedColor : props.backgroundColor)

        selectCallback()
    }

    function selectCallback () {
        if (props.onSelect) props.onSelect()
    }

    const { style, rounded, hoverColor, hoverBackgroundColor, text, selectedColor, fontColor, fontSize, type, alignText, selectedFontColor } = props

    return (
        <BaseButton
            onClick = { handleClick }
            style = { style }
            type = { type }
            alignText = { alignText }
            selectedColor = { selectedColor }
            backgroundColor = { backgroundColor }
            hoverBackgroundColor = { hoverBackgroundColor }
            hoverColor = { hoverColor }
            rounded = { rounded }
            fontColor = { fontColor }
            selectedFontColor = { selectedFontColor }
            fontSize = { fontSize }
            selected = { selected }
        >
            <span>
                {text}
            </span>
        </BaseButton>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    hoverBackgroundColor: PropTypes.string,
    hoverColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    rounded: PropTypes.bool,
    fontColor: PropTypes.string,
    fontSize: PropTypes.string,
    style: PropTypes.object,
    selectable: PropTypes.bool,
    alignText: PropTypes.string,
    onSelect: PropTypes.func,
    selectedColor: PropTypes.string,
    type: PropTypes.string
}

export default Button
