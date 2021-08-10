import styled from 'styled-components'

export const FiltersBase = styled.div`
    display: grid;
    grid-template-columns: 650px auto;
    grid-auto-flow: column;
    grid-column-gap: 50px;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 100px;

    span{
        font-size: 18px;
        white-space: nowrap;
    }

    #inputDiv{
        width: 100%;
    }

    @media (max-width: 750px) {
        span{
            margin-left: 20px;
        }

        #inputDiv{
            margin-right: 0px;
            min-width: 100%;
            width: 100%;
            flex: 1;
        }
    }

`

export const InpStyle = styled.div`
    width: 60%;
    margin-right: 20px;

    @media (max-width : 1350px){
        margin-left: 0px;
    }

    @media (max-width : 650px){
        width: 90%;
        margin-left: 20px;
    }
`

export const DropStyle = styled.div`
    width: 30%;
    @media (max-width : 650px){
        display: none;
        width: 90%;
        margin-left: 20px;
        margin-top: 5px;
    }
`
export const FlexFilters = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;

    @media (max-width: 1350px){
        justify-content: flex-start;
    }

`

export const SelectableButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width : 650px){
        display: none;
    }
`

export default FiltersBase;