import styled from 'styled-components'

export const Content = styled.div`
    width:100%;
    
    @media (max-width: 600px){
        padding: 0px;
    }

`

export const Grid = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(350px, auto));
    justify-items: center
`
export default Content
