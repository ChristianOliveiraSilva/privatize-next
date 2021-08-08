import React, { useRef } from 'react'
import CommentArea from '../CommentArea'
import Button from '../../Button'
import { RepplyHandlerWrapper, RepplyButtons } from './style'

const sharedButtonStyle = {
    width: '200px',
    height: '50px', 
    hoverBackgroundColor: '#CACACA',
    hoverColor: 'white',
    rounded: true
}

function RepplyHandler(props) {
    const commentTextArea = useRef()

    const addNewRepply = () => {
        const { addNewRepply, commentId } = props
        const text = commentTextArea.current.value
    
        addNewRepply(commentId, text)
    }

    const cancelHandler = () => {
        props.hideRepplyHandler()
    }

    return (
        <RepplyHandlerWrapper>
            <CommentArea innerRef={commentTextArea} />
            <RepplyButtons>
                <Button {...sharedButtonStyle} onClick={ addNewRepply } text='Enviar' backgroundColor='lightgray'/>
                <Button {...sharedButtonStyle} onClick={ cancelHandler } text='cancelar' backgroundColor='red' />
            </RepplyButtons>
        </RepplyHandlerWrapper>
    )
}

export default RepplyHandler
