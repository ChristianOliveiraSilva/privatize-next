import React, { useContext } from 'react'
import { Header } from './style'
import ModalBase from './ModalBase'
import { ModalInteface } from './helpers/interfaces'
import ModalContext from '../Modal/helpers/modalContext'

const Modal: React.FC<ModalInteface>  = (props) => {

    const setIsModalOpen = useContext(ModalContext);

    function getHeader() {
        if (props.headerText){
            return (
                <Header>
                    <div onClick={() => setIsModalOpen(false)}>
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
