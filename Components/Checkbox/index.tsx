import React, { StyleHTMLAttributes, useState } from 'react'
import {CheckboxBase, Input} from './style'

interface CheckboxProps {
    text: string,
    onChange: Function,
    margin: string,
    value: string,
    textStyle: StyleHTMLAttributes<Object>
}

const Checkbox: React.FC<CheckboxProps>  = (props) => {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        const { onChange } = props

        if (onChange) {
            onChange()
        }

        setChecked(!checked)
    }

    return (
        <CheckboxBase margin={props.margin}>
            <Input type="checkbox" onChange={handleChange} checked={checked}/>
            <span id="text" onClick={handleChange} style={props.textStyle}>{props.text}</span>
        </CheckboxBase>
    )
}

export default Checkbox
