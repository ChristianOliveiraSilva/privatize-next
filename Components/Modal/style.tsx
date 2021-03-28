import styled from 'styled-components'

export const Header = styled.div`
    position: relative;
    padding: 20px;


    div {
        position: absolute;
        transform: translateY(-50%);
        right: 15px;
        top: 40%;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;

        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: lightgray;
        text-align: center;

        span {
            font-size: 10px;
            font-weight: bolder;
            color: white;
        }

        :hover {
            color: red;
            transform: translateY(-50%) scale(1.1);
        }
    }

    

    -webkit-box-shadow: 0px 1px 11px -5px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 1px 11px -5px rgba(0,0,0,0.35);
    box-shadow: 0px 1px 11px -5px rgba(0,0,0,0.35);
`
