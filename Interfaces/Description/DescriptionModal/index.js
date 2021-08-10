import React, { useState } from 'react'

import { DescriptionModalWrapper, ReasonInput, DescModalButtons } from './style'

import Modal from '../../../Components/Modal'
import Button from '../../../Components/Button'

function DescriptionModal() {

    const [ modalStatus, setModalStatus ] = useState(true)

    function closeModal() {
        setModalStatus(false)
    }

    function onApprove() {
        setModalStatus(false)
    }

    function onReprove() {
        setModalStatus(false)
    }

    const modalProps = {
        headerText: 'Pesquisa',
        isModalOpen: modalStatus,
        onClose: closeModal,
        shadow: true
    }

    const modalStyle = {
        width: '500px',
        height: '300px'
    } 

    return (
        <Modal modalStyle={modalStyle} {...modalProps}>
            <DescriptionModalWrapper>
                <h3>Você aprova a privatização dessa empresa?</h3>
                <ReasonInput placeholder='Motivo' />
                <DescModalButtons>
                    <Button backgroundColor='gray' onClick={() => onApprove()} text='Aprovar'/>
                    <Button backgroundColor='lightgray' onClick={() => onReprove()} text='Reprovar'/>
                </DescModalButtons>
            </DescriptionModalWrapper>
        </Modal>
    )
}

export default DescriptionModal
