import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid ${props => props.theme.clrBorder};
    padding: 1rem;
    border-radius: .5rem;
`;

export const Button = styled.a`
    background-color: ${props => props.theme.clrPrimary};
    color: white;
    font-size: 14px;
    padding: .5rem;
    cursor: pointer;
    display: inline-block;
    margin-top: 1.5rem;
    border-radius: .125rem;
`;



