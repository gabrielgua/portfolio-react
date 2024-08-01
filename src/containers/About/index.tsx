import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { GithubSection } from "./styles";

const About = () => (
    <section>
        <Title fs={16}>Sobre</Title>
        <Paragraph >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Doloribus, dolorum recusandae suscipit natus placeat 
            delectus ratione omnis voluptas aliquid obcaecati, molestiae odit! 
            Asperiores quibusdam facilis eligendi aliquam maiores quasi autem.
        </Paragraph>

        <GithubSection>
            <img src="https://github-readme-stats.vercel.app/api?username=gabrielgua&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabrielgua&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSection>
    </section>
)
export default About;