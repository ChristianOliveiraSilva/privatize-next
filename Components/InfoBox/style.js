import styled, { keyframes } from 'styled-components'

const rightLeft = keyframes`
  0% {
    transform: translateX(500px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const InfoBoxContent = styled.div`
    position: absolute;
    transition: 0.3s;
    display: none;
    right: 0;
    transform-origin: top right;
    animation: ${rightLeft} 0.3s forwards;
    width: 400px;
    min-height: calc(100% - 80px);
    padding-left: 20px;
    border-left: solid 0.5px lightgray;

    @media (max-width: 1000px){
        width: 100%;
    }

`

export const InfoBoxHandler = styled.div`
    position: absolute;
    z-index: 2;
    right: 0;
    top: 100px;
    width: 200px;
    height: 40px;
    cursor: pointer;
    transition: 0.3s;
    transform-origin: top left;
    border-left: solid 2px #008542;

    #hoverHandler {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        color: white;
        background-color: #008542;
        transform-origin: top right;
        transform: scaleX(0.2);
        transition: 0.3s;
    }

    span {
        position: absolute;
        z-index: 3;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.3s;
        left: 20px;
    }

    :hover{        
        #hoverHandler {
            transform: scaleX(1);
        }
        span {
            color: white;
        }
    }

`

export const InfoRow = styled.div`
    
`

export default InfoBoxContent;