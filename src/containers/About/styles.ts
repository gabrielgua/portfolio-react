import styled from "styled-components";

export const GithubSection = styled.div`
    margin-block: 2rem 4rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    border: 1px solid ${props => props.theme.clrBorder};
    border-radius: .5rem;

    img {
        display: block;
        max-height: 180px;
    }
`;