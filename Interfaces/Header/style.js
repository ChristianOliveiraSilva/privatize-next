import styled from 'styled-components'

export const Content = styled.div`
    #logo{
        min-width:500px;
        margin-top: 35px;
        *{
            margin-left: 5%;
        }
    }

    #navLogin{
        position: relative;
        min-width:500px;
        #navDiv{
            position: absolute;
            width: max-content;
            right: 10%;
            top: 100px ;
        }
    }

    @media (max-width: 1000px){
        #logo{
            width:100%;
        }
        #navLogin{
            #navDiv{
                left: 5%;
                top: 0px;
            }
        }
    }

    @media (max-width: 600px){
        margin-top: 10px;
        #navLogin{
            position: relative;
            min-width:100%;
            #navDiv{
                position: relative;
                width: max-content;
                left: 5%;
                max-width: 600px;
            }
        }

        #logo{
            margin-top: 0px;
            min-width: 200px;
        }
    }

    @media (max-width: 400px){
        #navLogin{
            min-width: 300px;
            max-width: 400px;
        }
    }

`

export default Content
