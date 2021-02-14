import styled from 'styled-components'

export const CheckboxBase = styled.div`
    display: flex;
    cursor: pointer;
    align-items: baseline;
    transition: 0.3s;

    -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none;  
        -ms-user-select: none; 
            user-select: none;

    #text{
        margin-left: ${({margin}) => margin ? margin : '15px'};
        color: #B1B1B1;
    }
    
    @media (max-width :600px){
        #text{
            margin-left: 5px;
        }
    }

`

export const Input = styled.input`

`

export default CheckboxBase
