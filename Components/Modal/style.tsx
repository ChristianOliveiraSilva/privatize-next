import styled from 'styled-components'

interface ModalBaseProps {
    isOpen: boolean
}

export const ModalBase = styled.div<ModalBaseProps>`
    display: ${({isOpen}) => isOpen ? 'block' : 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 2;
`

interface ShadowProps {
    shadow?: boolean
    isOpen: boolean
}

export const Shadow = styled.div<ShadowProps>`
    display: ${({shadow, isOpen}) => {
        if (isOpen) {
            return shadow ? 'block' : 'none'
        }

        return 'none'
    }};
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: black;
    opacity: 0.5;
`

