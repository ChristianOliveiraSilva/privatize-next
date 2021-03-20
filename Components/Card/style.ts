import styled, { keyframes } from 'styled-components'

const open = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

interface ContentProps {
    animated?: Boolean,
    animationDelay?: String
} 

export const Content = styled.div<ContentProps>`
    width: 350px;
    height: 250px;
    max-width: 80%;
    opacity: ${props => props.animated ? 0 : 1};
    border-radius: 5px;
    transition: 0.3s;
    padding: 10px;
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
    animation: ${open} 0.3s linear forwards;
    animation-delay: ${props => props.animationDelay}s;
    cursor: pointer;
    margin-top: 20px;
    border-bottom: solid 0.5px lightgray;

    .subs{
        font-size: 25px;
    }

    .companieName{
        transition: 0.1s;
        color: #76AE63;
        font-size: 25px;
    }

    :hover{
        border: solid 1px #76AE63;

        .companieName{
            font-size: 28px;
        }
    }

`

export const Logo = styled.div`

    position:relative;
    width: 100%;
    height: 80%;
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`

export const Footer = styled.div`
    display: flex;
    height: 20%;
    align-items: flex-end;
    padding-right: 10px;
    padding-left: 10px;
    justify-content: space-between;

`

export const Icon = styled.img`

    width: 30px;
    height: 30px;

`
