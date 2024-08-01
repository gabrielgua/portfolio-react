import { Title as TitleStyle } from "./styles";

export type TitleProps = {
    children: string
    fs?: number
}

const Title = (props: TitleProps) => (
    <TitleStyle fs={props.fs ?? 16}>{props.children}</TitleStyle>
);

export default Title;