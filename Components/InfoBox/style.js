import styled, {keyframes} from 'styled-components'

export const InfoBoxContent = styled.div`
    position: relative;
    transition: 0.3s;
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    width: ${({ isOpen }) => isOpen ? '400px' : '0px'};
    min-height: calc(100% - 80px);
    padding-left: 20px;
    border-left: solid 0.5px lightgray;

    @media (max-width: 1000px) {
        min-width: 100%;
        width: 100%;
    }
`

export const InfoBoxHandler = styled.div`
    position: absolute;
    z-index: 2;
    right: ${({ isOpen }) => isOpen ? '425px' : '20px'};
    transform-origin: ${({ isOpen }) => isOpen ? 'top right' : 'top left'};
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

    @media (max-width: 1000px) {
        right: 20px;
        position: fixed;
    }

`

export const InfoRow = styled.div`
    
`

export default InfoBoxContent;