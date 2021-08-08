import styled, {keyframes} from 'styled-components'

const leftRight = keyframes`
  0% {
    transform: translateX(-300);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const DescriptionBase = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
`

export const Content = styled.div`
    transform-origin: top left;
    width: 100%;
    animation: ${leftRight} 1s;

    @media (max-width: 1000px) {
        opacity: ${({isContentVisible}) => isContentVisible ? '1' : '0'};
    }
`

export const CompanieLogo = styled.div`
    min-height: 400px;
    position: relative;

    img {
        position: absolute;
        width: 600px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 600px){
          width: 300px;
          height: 100px;
        }

    }
`

export const CommentContainer = styled.div`
  flex: 0.8;
`

export const CommentChartContainer = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 50px;
  padding-bottom: 50px;
  flex-direction: row;
  align-items: space-between;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
    @media (max-width: 1350px) {
      padding-left: 10%;
      padding-right: 10%;
    }

    
`

export const GraphicWrapper = styled.div`
  width: 100%;
  height: 300px;
`


export const PieContainer = styled.div`

    width: 500px;
    height: 500px;
    text-align: center;
    align-self: flex-end;

    @media (max-width: 1000px) {
      margin-top: 50px;

      h1 {
        font-size: 30px;
      }
    }

    @media (max-width: 600px) {

      h1 {
        font-size: 20px;
      }

      width: 100%;
      height: 300px;
      margin-bottom: 100px;
    }
`

export const ContentContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row-reverse;
`

export default DescriptionBase;
