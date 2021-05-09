import React from 'react'
import { TextArea, Rep, Options } from '../style'
import Button from '../../Button'
import PropTypes from 'prop-types'

function Reply (props) {
    const { reference, addReply, disableReply } = props

    const onReply = () => {
        addReply()
        disableReply()
    }

    return (
        <Rep>
            <TextArea placeholder='Escreva a sua resposta..' ref={reference} />
            <Options>
                <Button onClick={ onReply } backgroundColor="#EEEEEE" hoverBackgroundColor="lightgray" rounded text='Enviar' />
                <Button style={{ marginLeft: '5px' }} backgroundColor="#EEEEEE" hoverBackgroundColor="lightgray" onClick={ disableReply } rounded text='Cancelar' />
            </Options>
        </Rep>
    )
}

Reply.propTypes = {
    reference: PropTypes.object,
    addReply: PropTypes.func,
    disableReply: PropTypes.func
}

export default Reply
