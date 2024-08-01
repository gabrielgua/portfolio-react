import Paragraph from "../Paragraph";
import Title from "../Title";
import { Button, Card } from "./styles";


const Project = () => (
    <Card>
        <Title mb=".25rem">Projeto x</Title>
        <Paragraph type="secondary">Descrição do projeto</Paragraph>
        <Button>Visualizar</Button>
    </Card>
);

export default Project;