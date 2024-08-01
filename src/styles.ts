import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        padding-block-start: 3rem;
    }
`;

export default GlobalStyles;

export const Container  = styled.div`
    width: min(1024px, 100% - 6rem);
    margin-inline: auto;

    display: grid;
    grid-template-columns: 128px auto;
    gap: 3rem;

    img {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        place-items: center;
        grid-template-columns: 1fr;
    }
`; 
