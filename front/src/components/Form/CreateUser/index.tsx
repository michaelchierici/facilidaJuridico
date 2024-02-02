import { useState } from "react";
import { Input } from "../../Input";
import formatPhone from "../../../utils/formatPhone";
import { Container, Footer } from "./styles";
import Button from "../../Button";
import UserService from "../../../api/services/User/UserService";
import { ICreateUser } from "../../../types/Card";
import { useTheme } from "styled-components";
import { useToast } from "../../../hooks/useToast";

export default function CreateUser({ onCreateUser, onClose }: ICreateUser) {
  const { showToast } = useToast();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [coordinate_point, setCoordinate_point] = useState({ x: "", y: "" });

  const isFormaValid =
    !name || !email || !phone || !coordinate_point.x || !coordinate_point.y;

  async function handleCreateUser() {
    setIsLoading(true);
    try {
      await UserService.createUser({ name, email, phone, coordinate_point });
      showToast("Usuário criado com sucesso!", theme.colors.success);
      onCreateUser();
      onClose();
    } catch {
      showToast("Falha ao criar usuário!", theme.colors.error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCoordinateChange =
    (axis: "x" | "y") => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCoordinate_point((prev) => ({
        ...prev,
        [axis]: e.target.value,
      }));
    };

  return (
    <Container>
      <Input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e?.target.value)}
      />
      <Input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e?.target.value)}
      />
      <Input
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(formatPhone(e?.target.value))}
      />
      <Input
        placeholder="Coordenada X"
        value={coordinate_point.x}
        onChange={handleCoordinateChange("x")}
      />
      <Input
        placeholder="Coordenada y"
        value={coordinate_point?.y}
        onChange={handleCoordinateChange("y")}
      />
      <Footer>
        <Button
          text="Cadastrar"
          size="small"
          onClick={handleCreateUser}
          isLoading={isLoading}
          disabled={!!isFormaValid}
        />
        <Button
          text="Cancelar"
          size="small"
          onClick={onClose}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </Footer>
    </Container>
  );
}
