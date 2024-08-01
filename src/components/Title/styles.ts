import styled from "styled-components";
import { TitleProps } from ".";

export const Title = styled.h3<TitleProps>`
    color: black;
    font-size: ${props => props.fs ? props.fs : '14' }px;
    font-weight: bold;
    margin-block-end: 1rem;
`;