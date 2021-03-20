import styled from 'styled-components'

interface LogoBaseProps {
    wf1000?: Boolean,
    wf600?: String,
    wf400?: String
} 

export const LogoBase = styled.span<LogoBaseProps>`
    white-space: nowrap;
    color: #76AE63;
    font-size: ${props => props.fontSize};
    cursor: pointer;
    -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;

    @media (max-width: 1000px){
        font-size: ${({wf1000}) => wf1000 };
    }

    @media (max-width: 600px){
        font-size: ${({wf600}) => wf600 };
    }

    @media (max-width: 400px){
        font-size: ${({wf400}) => wf400 };

    }
`
