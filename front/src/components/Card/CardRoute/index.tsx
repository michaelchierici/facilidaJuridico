import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as Pin } from "../../../assets/icons/pin.svg";
import { Container, Content, TitleContainer, Title } from "./styles";
import { ICardRoute } from "../../../types/Card";
import { formattedCoordinatePoint } from "../../../utils/formatCoordinate";

export default function CardRoute({ user }: ICardRoute) {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <UserIcon />
          <Title>{user?.name}</Title>
        </TitleContainer>
      </Content>
      <Content>
        <TitleContainer>
          <Pin />
          <Title>{formattedCoordinatePoint(user.coordinate_point)}</Title>
        </TitleContainer>
      </Content>
    </Container>
  );
}
