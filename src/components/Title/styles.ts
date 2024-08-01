import styled from "styled-components";
import { TitleProps } from ".";

export const Title = styled.h3<TitleProps>`
    color: ${props => props.theme.textPrimary};
    font-size: ${props => props.fs ? props.fs : '14' }px;
    font-weight: bold;
    margin-block-end: ${props => props.mb ? props.mb : '1rem'};
`;