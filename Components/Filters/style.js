import styled from 'styled-components'

export const FiltersBase = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    span{
        font-size: 18px;
        white-space: nowrap;
    }

    #inputDiv{
        margin-right:20px;
        min-width: 50%;
        width: 50%;
    }

    @media (max-width: 1350px) {

        #inputDiv{
            margin-left: 50px;
            margin-top: 20px;
            min-width: 700px;
            width: 100%;
            flex: 1;
        }
    }

    @media (max-width: 750px) {
        span{
            margin-left: 20px;
        }

        #inputDiv{
            margin-right: 0px;
            margin-left: 20px;
            min-width: 100%;
            width: 100%;
            flex: 1;
        }
    }

    @media (max-width: 650px) {
        #inputDiv{
            margin-left: 0px;
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

export const MiddleFilters = styled.div`
    @media (max-width : 650px){
        display: none;
    }
`

export default FiltersBase;