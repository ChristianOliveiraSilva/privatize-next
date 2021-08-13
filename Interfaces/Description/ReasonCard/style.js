import styled from 'styled-components'

export const ReasonCardWrapper = styled.div`
    display: flex;
    break-inside: avoid;
    margin-bottom: 10px;
    border: solid 0.5px lightgray;
    border-radius: 5px;
    padding: 15px;
    height: max-content;
    font-size: 12px;
    user-select: none;
    cursor: crosshair;

    :hover {
        transform: scale(1.1);
        background-color: white;
        z-index: 5;

        span {
            font-size: 14px;
            color: gray;
        }
    }
`