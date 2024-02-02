import { Container, Content, Title } from "./styles";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { ReactComponent as Avatar } from "../../assets/icons/avatar.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <div className="title-content">
          <Title>CleanApp</Title>
          <Logo />
        </div>
        <div className="icon-content">
          <Settings />
          <Notification />
        </div>
        <Avatar />
        <Title>Jonhantan Doe</Title>
      </Content>
    </Container>
  );
}
