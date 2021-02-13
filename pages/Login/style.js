import styled from 'styled-components'

export const Form = styled.form`

    width: 400px;
    height: auto;

    #obs{
        transition: 0.3s;
        cursor: pointer;
        margin-top: 5px;

        :hover{
            color: #76AE63;
            transform: scale(1.03);
        }
    }

    @media (max-width: 600px) {
        width: 350px;
    }
    
    @media (max-width: 400px) {
        width: 300px;
    }
`

export const LoginButtons = styled.div`
    width: 100%;
    margin-top: 20px;
`

export const Loading = styled.img`
    display: ${props => props.visible ? 'block' : 'none'};
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    
`

export default Form
