import styled, { keyframes } from 'styled-components'

const apear = keyframes`
    from {
        opacity : 0;
    }
    
    to {
        opacity : 1;
    }
`

export const Content = styled.div`
    span{
        cursor: pointer;
        font-size: 24px;
        transition: 0.3s;
        
        :hover{
            color: black;
        }
    }

    #register{
        margin-left: 20px;
    }

    @media (max-width: 600px){
        
        display: none;

        span{
            font-size: 18px;
            transition: 0.3s;
            
            :hover{
                color: black;
            }
        }
    
        #register{
            margin-left: 20px;
        }
        img{
            width: 18px;
            height: 18px;
        }
    }

`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 20px;
`

export const HoverUser = styled.div`
      position: absolute;
      top: 40px;
      width: auto;
      display: none;
      animation: ${apear} 0.8s;
      
   div{
        position: relative;
        width: 100%;
        height: 40px;
        background-color: white; 
        cursor: pointer;
        
        &:nth-child(2) {
           background-color: red;
           span {
            color: white;
           }
        }
        
        span{
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);         
        }
    
        :hover {
            background-color: #CCCCCC;
        }
   }
`
