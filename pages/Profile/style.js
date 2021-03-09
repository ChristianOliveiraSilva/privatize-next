import styled from 'styled-components'

export const BaseProfile = styled.div `
    width: 100%;
    height: 100%;
`

export const ProfileContainer = styled.div `
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 50px;
    border-bottom: solid 0.5px lightgray;
    padding-bottom: 20px;
`

export const CenterContainer = styled.div `
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


export const InformationContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserInformation = styled.div `
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 5px;
`

export const Image = styled.img `
    width: 60px;
    height: 60px;
    margin-right: 50px;
`

export const OptionsContainer = styled.div `
    display: flex;
    flex-direction: column;
`