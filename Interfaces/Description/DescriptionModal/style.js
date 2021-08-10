import styled from 'styled-components'

export const DescriptionModalWrapper = styled.div`
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;

    h3 {
        margin-top: 60px;
    }
`

export const DescModalButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    gap: 20px;
`

export const ReasonInput = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-top: 20px;
    resize: none;
`

