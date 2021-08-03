import React from 'react'
import CommentArea from '../CommentArea'
import Button from '../../Button'
import { RepplyWrapper, RepplyButtons } from './style'

function Repply() {
    return (
        <RepplyWrapper>
            <CommentArea/>
            <RepplyButtons>
                <Button
                    width='200px'
                    height='50px'
                    text='Enviar'
                    hoverBackgroundColor='#CACACA'
                    hoverColor='white'
                    backgroundColor='lightgray'
                    rounded
                />
                <Button
                    width='200px'
                    height='50px'
                    text='Cancelar'
                    hoverBackgroundColor='#CACACA'
                    hoverColor='white'
                    backgroundColor='red'
                    rounded
                />
            </RepplyButtons>
        </RepplyWrapper>
    )
}

export default Repply
