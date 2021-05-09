import styled from 'styled-components'

export const Flex = styled.div`

    display: flex;
    flex-direction: ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    *{
        flex:${props => props.max === 'true' ? 1 : null};
    }
`

export const Center = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`

export const Container = styled.div`
    position: relative;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;

    @media (max-width: 1350px) {
      padding-left: 10%;
      padding-right: 10%;
    }

    @media (max-width: 400px){
      padding-left: 5%;
      padding-right: 5%;
    }

`

export default Flex
