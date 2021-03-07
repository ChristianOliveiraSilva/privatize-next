import React, { useState } from 'react'
import Input from '../Input'
import { BaseEditableText, Icon } from './style'

const ConfirmIcon = require('../../Assets/Confirm.svg') as string
const EditIcon = require('../../Assets/Edit.svg') as string

interface EditableTextProps {
    textstyle?: object,
    iconStyle?: object,
    inputStyle?: object,
    placeholder?: string,
    text: string
}

const EditableText: React.FC<EditableTextProps> = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    function getContent() : JSX.Element {
        if (isEditing) {
            return (
                <Input placeholder={props.placeholder} inputStyle={props.inputStyle} />
            )
        } else {
            return (
                <span onClick={editHandler} style={props.textstyle}>{props.text}</span>
            )
        }
    }

    const editHandler = () : void => {
        setIsEditing(!isEditing)
    }

    function getIcon() : JSX.Element {
        return (
            <Icon style={props.iconStyle} src={isEditing ? ConfirmIcon : EditIcon} onClick={editHandler} />
        )
    } 

    return (
        <BaseEditableText>
            {getContent()}
            {getIcon()}
        </BaseEditableText>
    )
}
export default EditableText
