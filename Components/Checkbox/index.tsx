import React, { useState } from 'react'
import {CheckboxBase, Input} from './style'

interface CheckboxProps {
    text: string,
    addValue: Function,
    margin: string,
    value: string
}

const Checkbox: React.FC<CheckboxProps>  = (props) => {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        const { addValue } = props
        if (addValue && !checked) {
            addValue((prev : Array<string>) => [...prev, props.value])
        }
        if (addValue && checked) {
            addValue((prev : Array<string>) => {
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
        <CheckboxBase margin={props.margin}>
            <Input type="checkbox" onChange={handleChange} checked={checked}/>
            <span id="text" onClick={handleChange}>{props.text}</span>
        </CheckboxBase>
    )
}

export default Checkbox
