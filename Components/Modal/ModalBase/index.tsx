import React from 'react'
import { sizeMapper } from '../helpers/modalMapper'
import { sizes } from '../../../Helpers/Shared/sharedConstants'
import { ModalBaseWrapper, Shadow } from './style'
import { ModalBaseInteface } from '../helpers/interfaces'

const ModalBase: React.FC<ModalBaseInteface>  = (props) => {

    function onClose() {
        if (props.onClose) {
            props.onClose()
        }
    }

    function getStyle() {
        const { modalStyle, size } = props
        let resultStyle = {};
        
        Object.assign(resultStyle, sizeMapper[size ? size : sizes.MEDIUM])

        if (modalStyle) {
            Object.assign(resultStyle, modalStyle)
        }

        if (props.rounded) {
            Object.assign(resultStyle, {
                borderRadius: '5px'
            })    
        }

        return resultStyle;
    }
    
    const { isModalOpen } = props;

    if (isModalOpen) {
        return (
            <React.Fragment>
                <Shadow onClick={() => onClose()} shadow={props.shadow}/>
                <ModalBaseWrapper style={getStyle()}>
                    { props.children }
                </ModalBaseWrapper>
            </React.Fragment>
        )
    }

    return null
}

ModalBase.defaultProps = {
    rounded: true
}

export default ModalBase
