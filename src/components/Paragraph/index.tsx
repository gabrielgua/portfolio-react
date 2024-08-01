import { P } from "./styles";


export type ParagraphProps = {
    children: string
    type?: 'primary' | 'secondary'
}

const Paragraph = ({ children, type = 'primary' }: ParagraphProps) => (
    <P type={type}>{children}</P>
);

export default Paragraph;