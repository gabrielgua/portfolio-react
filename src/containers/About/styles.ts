import styled from "styled-components";

export const GithubSection = styled.div`
    margin-block: 2rem 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    img {
        display: block;
        max-height: 180px;
        
    }
    
    @media (max-width: 768px) {
        img {
            width: 100%;
            max-height: none;
        }
    }
`;