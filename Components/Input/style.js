import styled from 'styled-components'
import { alertStyle } from '../../Helpers/Shared/sharedMappers'

export const Inp = styled.input`
    padding: 10px;
    border: ${props => {
        if (props.state) {
            return alertStyle[props.state].border
        }
    }};
    width: 100%;
    transition: 0.3s;
    padding-left: ${props => props.iconExists ? '45px' : '10px'}; 
    font-size: ${props => props.fontSize ? props.fontSize : '15px'};
    border-radius: ${props => props.rounded ? '5px' : '0px'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#EEEEEE'};
    
`

export const Content = styled.div`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    input{
        :focus{
            background-color: white;
        }
    }

    #iconDiv{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height:100%;
        width: 35px;
        background-color: white;
        border: none;
        -webkit-box-shadow: 7px 0px 7px -6px rgba(0,0,0,0.36);
        -moz-box-shadow: 7px 0px 7px -6px rgba(0,0,0,0.36);
        box-shadow: 7px 0px 7px -6px rgba(0,0,0,0.36);    
    }

`

export const Icon = styled.img`

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 10px;
    width: ${props => props.iconWidth ? props.iconWidth : 20}px;
    height: ${props => props.iconHeight ? props.iconHeight : 20}px;

`

export default Inp
