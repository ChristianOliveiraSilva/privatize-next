import styled from 'styled-components'

export const FooterBase = styled.div`
    margin-top: 100px;
    padding: 20px;
    height: 150px;
    width: 100%;
    height: max-content;
    padding-top: 50px;
    padding-bottom: 50px;
    
    -webkit-box-shadow: 0px -2px 7px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -2px 7px -5px rgba(0,0,0,0.75);
    box-shadow: 0px -2px 7px -5px rgba(0,0,0,0.75);

`
export const SectionContainer = styled.div`

    display: grid;
    grid-auto-flow: column;
    margin-top: 50px;

    section {
        h1 {
            color: gray;
            width: max-content;
            padding-bottom: 5px;
            border-bottom: solid 0.5px;
        }
        span {
            display: block;
            cursor: pointer;
            font-size: 20px;

            :hover {
                color: #76AE63;
            }
        }
        
        :hover {
            h1 {
                transform: scale(1.05);
                border-bottom: solid 5px #76AE63;
            }
        }

        .options {
            margin-top 20px;
        }   
    }

`

