import Project from "../../components/Project";
import Title from "../../components/Title";
import { ProjectList } from "./styles";

const Projects = () => (
    <section>
        <Title fs={16}>Projetos</Title>

        <ProjectList>
            <li><Project/></li>
            <li><Project/></li>
            <li><Project/></li>
            <li><Project/></li>
        </ProjectList>
    </section>
);

export default Projects;

