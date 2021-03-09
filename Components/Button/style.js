import styled from 'styled-components'

export const BaseButton = styled.button`
    position: relative;
    border-radius: ${({rounded}) => rounded ? '5px' : '0px'};
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : '#EEEEEE'};
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
        color: ${({fontColor}) => fontColor ? fontColor : 'white'};
        font-size: ${({fontSize}) => fontSize ? fontSize : '18px'};
        position: absolute;
        left: ${({alignText}) => alignText === 'left' ? '10px' : '50%'};
        top: 50%;
        transform: ${({alignText}) => alignText === 'left' ? 'translateY(-50%)' : 'translate(-50%, -50%)'};
    }
    
    :hover {
        background-color: ${props => props.hoverBackgroundColor};
        span{
            color: ${props => props.hoverColor};
        }
    }
`
