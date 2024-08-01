import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { GithubSection } from "./styles";

const About = () => (
    <section>
        <Title fs={16}>Sobre mim</Title>
        <Paragraph >
            Graduado em Análise e Desenvolvimento de Sistemas pela UniOpet e pós-graduado em Desenvolvimento Web
            Full-Stack pela Universidade Tuiuti do Paraná. Meu perfil é técnico, autônomo e proativo, e estou em busca de
            oportunidades para poder aplicar esses conhecimentos no mercado de desenvolvimento.
        </Paragraph>
        

        <GithubSection>
            <img src="https://github-readme-stats.vercel.app/api?username=gabrielgua&show_icons=true&theme=transparent&include_all_commits=false&count_private=false&locale=pt-br&hide_border=true&custom_title=Estatísticas do Github"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabrielgua&layout=compact&langs_count=6&theme=transparent&locale=pt-br&hide_border=true"/>
        </GithubSection>
    </section>
)
export default About;