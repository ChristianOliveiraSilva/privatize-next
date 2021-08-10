import React from 'react'
import { Header } from './style'
import ModalBase from './ModalBase'
import { ModalInteface } from './helpers/interfaces'

const Modal: React.FC<ModalInteface>  = (props) => {

    function onClose() {
        if (props.onClose) {
            props.onClose()
        }   
    }

    function getHeader() {
        if (props.headerText){
            return (
                <Header>
                    <div onClick={() => onClose()}>
                        <span>x</span>
                    </div>
                    {props.headerText}
                </Header>
            )
        }
    }

    return (
        <ModalBase {...props} >
            { getHeader() }
            { props.children }
        </ModalBase>
    )
}

export default Modal
