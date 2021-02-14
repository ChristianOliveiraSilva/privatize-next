import styled from 'styled-components'

export const BaseNavbar = styled.div`   
    z-index: 5;
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    justify-content: space-between;

    -webkit-box-shadow: 0px 1px 11px -5px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 1px 11px -5px rgba(0,0,0,0.35);
    box-shadow: 0px 1px 11px -5px rgba(0,0,0,0.35);

    #flex{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`