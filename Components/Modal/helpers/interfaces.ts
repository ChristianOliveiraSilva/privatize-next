import { StyleHTMLAttributes } from 'react'

export interface ModalBaseInteface {
    onClose?: Function,
    rounded?: boolean,
    children: any | undefined,
    shadow?: boolean,
    modalStyle?: StyleHTMLAttributes<Object>,
    size?: string,
    isModalOpen: boolean,
    setIsModalOpen: Function
}

export interface ModalInteface extends ModalBaseInteface {
    headerText?: string
}

export default ModalBaseInteface