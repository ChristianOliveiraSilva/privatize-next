import styled from 'styled-components'

export const CheckboxBase = styled.div`
    cursor: pointer;

    #text{
        margin-right: 20px;
        color: #B1B1B1;
    }
    
    @media (max-width :600px){
        #text{
            margin-right: 5px;
        }
    }

`

export default CheckboxBase
