import { Title as TitleStyle } from "./styles";

export type TitleProps = {
    children: string
    fs?: number
    mb?: string
}

const Title = (props: TitleProps) => (
    <TitleStyle fs={props.fs ?? 16} mb={props.mb}>{props.children}</TitleStyle>
);

export default Title;