import React, { StyleHTMLAttributes } from 'react'
import { sizeMapper } from './helpers/modalMapper'
import { sizes } from '../../Helpers/Shared/sharedConstants'
import { ModalBase, Shadow } from './style'

interface ModalProps {
    onClick?: Function,
    children: React.FC,
    shadow?: boolean,
    style?: StyleHTMLAttributes<Object>,
    size?: string,
    isOpen: boolean
}
const Modal: React.FC<ModalProps>  = (props) => {
    
    function getStyle() {
        const { style, size } = props
        let resultStyle = {};

        if (style) {
            Object.assign(resultStyle, style)
        }

        Object.assign(resultStyle, sizeMapper[size ? size : sizes.MEDIUM])

        return resultStyle;
    }
    
    const { isOpen } = props;

    return (
        <>
            <Shadow isOpen={isOpen} shadow={props.shadow}/>
            <ModalBase isOpen={isOpen} style={getStyle()} onClick={props.onClick}>{props.children}</ModalBase>
        </>
    )
}

export default Modal
