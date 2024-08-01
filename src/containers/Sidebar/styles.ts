import styled from "styled-components";
import { P } from "../../components/Paragraph/styles";

export const SidebarWrapper = styled.div`
    position: sticky;
    top: 3rem;
    left: 0;
`;


export const Description = styled(P)`
    margin-bottom: 1rem;
`;

export const ThemeButton = styled.button`
    width: 100%;
    border-radius: 1rem;
    padding: .5rem;
    color: white;
    font-size: 12px;
    font-weight: bold;
    background-color: #282a35;
    border: none;
    margin-block-start: 1rem;
    cursor: pointer;
`;