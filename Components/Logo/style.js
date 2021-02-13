import styled from 'styled-components'

export const LogoBase = styled.span`
    white-space: nowrap;
    color: #76AE63;
    font-size: ${props => props.fontSize}px;
    cursor: pointer;
    -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;

    @media (max-width: 1000px){
        font-size: 80px;
    }

    @media (max-width: 600px){
        font-size: 60px;
    }

    @media (max-width: 400px){
        font-size: 40px;
    }
`
