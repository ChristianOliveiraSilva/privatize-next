import styled from 'styled-components'

export const TagBase = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: flex-end;

    div {
        margin-left: 10px;

        :first-child {
            margin-left: 0;
        }
    }

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

`

export const TagWrapper = styled.div`
    background-color: ${({ color }) => color};
    border-radius: 20px;
    padding-left: 5px;
    padding-right: 5px;

    span {
        color: white;
        font-size: 14px;
    }
`
