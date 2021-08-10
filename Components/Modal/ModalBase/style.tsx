import styled, { keyframes } from 'styled-components'

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

interface ModalBaseProps {
    isOpen: boolean
}

export const ModalBaseWrapper = styled.div<ModalBaseProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: white;
    animation: ${zoomIn} 0.3s forwards;
    z-index: 2;
`

interface ShadowProps {
    shadow?: boolean
}

export const Shadow = styled.div<ShadowProps>`
    display: ${({shadow}) => shadow ? 'block' : 'none'};
    background-color: black;
    position: fixed;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;

`
