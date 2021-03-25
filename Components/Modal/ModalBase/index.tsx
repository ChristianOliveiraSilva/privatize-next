import React, { useContext } from 'react'
import { sizeMapper } from '../helpers/modalMapper'
import { sizes } from '../../../Helpers/Shared/sharedConstants'
import { ModalB, Shadow } from './style'
import { ModalBaseInteface } from '../helpers/interfaces'
import ModalContext from '../helpers/modalContext'

const ModalBase: React.FC<ModalBaseInteface>  = (props) => {

    const setIsModalOpen = useContext(ModalContext)

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
                <Shadow onClick={() => setIsModalOpen(false)} shadow={props.shadow}/>
                <ModalB style={getStyle()} onClick={props.onClick}>
                    { props.children }
                </ModalB>
            </React.Fragment>
        )
    }

    return null
}

ModalBase.defaultProps = {
    rounded: true
}

export default ModalBase
