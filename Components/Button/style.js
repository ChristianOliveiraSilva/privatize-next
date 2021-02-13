import styled from 'styled-components'

export const Content = styled.button`
    position: relative;
    border-radius: ${props => props.rounded ? '5px' : '0px'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#EEEEEE'};
    width: 150px;
    height: 40px;
    cursor: pointer;
    transition: 0.3s;
    border: none;

    -webkit-touch-callout: none;   /* iOS Safari */
      -webkit-user-select: none;   /* Safari */
       -khtml-user-select: none;   /* Konqueror HTML */
         -moz-user-select: none;   /* Old versions of Firefox */
          -ms-user-select: none;   /* Internet Explorer/Edge */
              user-select: none; 

    span{
        color: ${props => props.fontColor ? props.fontColor : 'white'};
        font-size: ${props => props.fontSize ? props.fontSize : '18px'};
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: auto;
        transform: translate(-50%, -50%);
    }
    
    :hover {
        background-color: ${props => props.hoverBackgroundColor};
        span{
            color: ${props => props.hoverColor};
        }
    }
`
