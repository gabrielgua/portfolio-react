import Avatar from "../../components/Avatar";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { Description, SidebarWrapper, ThemeButton } from "./styles";

type SidebarProps = {
    changeTheme: () => void,
}

const Sidebar = (props: SidebarProps) => ( 
    <aside>
        <SidebarWrapper>
            <Avatar />
            <Title fs={20} mb=".25rem">Gabriel Guaitanele</Title>
            <Description type="secondary" >@gabrielgua</Description>
            <Paragraph>Desenvolvedor FullStack</Paragraph>
            <ThemeButton onClick={props.changeTheme}>Trocar tema</ThemeButton>
        </SidebarWrapper>
    </aside>

)

export default Sidebar;