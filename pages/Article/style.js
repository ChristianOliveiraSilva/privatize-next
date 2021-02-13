import styled from 'styled-components'

export const Presentation = styled.div`
    margin: 0px auto;
    padding: 5px;
    
    hr {
        border: 0.1px solid #eee;
        width: 80%;
        margin: 10px auto 0px auto;
    }
    
    h1 {
        font-size: 2.5em;
    }

    .primary-color {
        color: #76AE63;
        white-space: nowrap;
    }

    .small-paragraph {
        font-size: .7em;
        width: 80%;
        text-align: right;
        margin: 0px auto;
    }

    @media (min-width: 600px) {
        width: 70%;
    }
`
export const Showcase = styled.div`
    margin: 10px auto;
    padding: 5px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, auto));
    grid-gap: 5px;
    justify-items: center;

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 100%;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .content {
        padding: 2px 16px;
    }

    .thumbnail {
        width: 100%;
    }
`
export const ArticleBase = styled.div`
    width: 80%;
    margin: 0px auto;
    padding: 5px;

`

export const ArticleHeader = styled.div`
    display: flex;
    span {
        font-size: 2.4em;
        color: #555;
        flex: 11;
    }
    button {
        flex: 1;
        border: 0px;
        background-color: transparent;
        outline: transparent;
        cursor: pointer;
    }
`

export const ArticleContent = styled.div`
    text-align: justify;
`

export default Presentation