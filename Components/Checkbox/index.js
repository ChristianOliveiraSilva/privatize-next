import React, { useState } from 'react'
import Flex from '../../Global/Style'
import CheckboxBase from './style'
import PropTypes from 'prop-types'

function Checkbox (props) {
    const [checked, setChecked] = useState(false)

    function handleChange () {
        const { addValue } = props
        if (addValue && !checked) {
            addValue(prev => [...prev, props.value])
        }
        if (addValue && checked) {
            addValue(prev => {
                const newArray = []
                for (let i = 0; i < prev.length; i++) {
                    if (prev[i] !== props.value) {
                        newArray.push(prev[i])
                    }
                }
                return newArray
            })
        }

        setChecked(!checked)
    }

    return (
        <CheckboxBase>
            <Flex alignItems="baseline">
                <span id="text" onClick={() => handleChange()} >{props.text}</span>
            </Flex>
        </CheckboxBase>
    )
}

Checkbox.propTypes = {
    text: PropTypes.string,
    addValue: PropTypes.func
}

export default Checkbox
