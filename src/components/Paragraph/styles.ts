import styled from "styled-components";
import { ParagraphProps } from ".";

export const P = styled.p<ParagraphProps>`
    font-size: 14px;
    color: ${props => props.type === 'primary' ? props.theme.textPrimary : props.theme.textSecondary};
    line-height: 22px;
`;