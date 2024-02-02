import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as MailIcon } from "../../../assets/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/phone.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { Container, Content, Footer, TitleContainer, Title } from "./styles";
import { ICardUser } from "../../../types/Card";

export default function CardUser({ user, onClick }: ICardUser) {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <UserIcon />
          <Title>{user?.name}</Title>
        </TitleContainer>

        <TitleContainer>
          <MailIcon />
          <Title>{user?.email}</Title>
        </TitleContainer>

        <TitleContainer>
          <PhoneIcon />
          <Title>{user?.phone}</Title>
        </TitleContainer>
        <Footer>
          <TrashIcon onClick={onClick} />
        </Footer>
      </Content>
    </Container>
  );
}
