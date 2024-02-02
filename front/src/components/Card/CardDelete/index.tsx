import { useState } from "react";
import { useTheme } from "styled-components";
import { useToast } from "../../../hooks/useToast";

import Button from "../../Button";
import UserService from "../../../api/services/User/UserService";

import { Container, Content, ButtonsContainer } from "./styles";
import { ICardDelete } from "../../../types/Card";

export default function CardDelete({
  user,
  onClose,
  onDeleteUser,
}: ICardDelete) {
  const { showToast } = useToast();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleDeleteUser() {
    setIsLoading(true);
    try {
      await UserService.deleteUser(user?.id);
      await UserService.findAllUsers();
      showToast("Usuário deletado!", theme.colors.success);
      onDeleteUser();
      onClose();
    } catch {
      showToast("Falha ao deletar usuário", theme.colors.error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <ButtonsContainer>
          <Button
            text="Confirmar"
            size="small"
            onClick={handleDeleteUser}
            isLoading={isLoading}
            disabled={isLoading}
          />

          <Button
            text="Cancelar"
            size="small"
            onClick={onClose}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
