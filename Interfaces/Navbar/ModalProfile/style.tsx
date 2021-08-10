import styled from 'styled-components'

export const InformationContainer = styled.div`   
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 50px;
    justify-items: center;
    margin-top: 50px;
`

export const Editables = styled.div`   
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 5px;
`

export const ProfileImage = styled.img`   
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const ImageContainer = styled.div`   
    padding: 20px;
    position: relative;
    border-radius: 100px;
    width: 100px;
    height: 100px;
    border: solid 0.5px lightgray;
`

export const ButtonContainer = styled.div`   
    position: absolute;
    right: 20px;
    bottom: 20px;
`
