import { useCallback, useEffect, useMemo, useState } from "react";

import UserService from "../../api/services/User/UserService";

import { ButtonContent, Container, Content, FilterContent } from "./styles";

import { IUser } from "../../types/User";

import Loader from "../../components/Loader";
import Filters from "../../components/Filters";
import Header from "../../components/Header";
import CardUser from "../../components/Card/CardUser";
import Modal from "../../components/Modal";
import CreateUser from "../../components/Form/CreateUser";
import CardDelete from "../../components/Card/CardDelete";
import CardRoute from "../../components/Card/CardRoute";
import Button from "../../components/Button";
import CustomToast from "../../components/Toast";
import delay from "../../utils/delay";
import { useTheme } from "styled-components";
import { useToast } from "../../hooks/useToast";

export default function Home() {
  const { toast, showToast } = useToast();
  const theme = useTheme();
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [orderBy, setOrderBy] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const [routes, setRoutes] = useState<IUser[]>([]);

  const [isModalToCreateUserOpen, setIsModalToCreateUserOpen] =
    useState<boolean>(false);
  const [isModalToViewRoutesOpen, setIsModalToViewRoutesOpen] =
    useState<boolean>(false);
  const [isModalToDeleteUserOpen, setIsModalToDeleteUserOpen] =
    useState<boolean>(false);

  const getUsers = useCallback(async () => {
    try {
      const allUsers = await UserService.findAllUsers(orderBy);
      setUsers(allUsers);
    } catch {
      showToast("Falha ao obter usuários", theme.colors.success);
    }
  }, [users, orderBy]);

  const getRoutes = useCallback(async () => {
    setIsModalToViewRoutesOpen(true);
    setIsLoading(true);
    try {
      const allRoutes = await UserService.orderedByRoutes();
      setRoutes(allRoutes);
    } catch {
      showToast("Falha ao obter rotas dos usuários", theme.colors.error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const usersFiltered = useMemo(() => {
    let filteredUsers = users;

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTermLower) ||
          user.email.toLowerCase().includes(searchTermLower) ||
          user.phone.toLowerCase().includes(searchTerm)
      );
    }

    return filteredUsers;
  }, [users, searchTerm]);

  function handleToggleOrderBY() {
    setOrderBy((prev) => (prev === "desc" ? "asc" : "desc"));
  }

  function handleSelectUser(user: IUser) {
    setUser(user);
    setIsModalToDeleteUserOpen(true);
  }

  useEffect(() => {
    getUsers();
    async function fakeLoading() {
      await delay(800);
      setInitialLoading(false);
    }
    fakeLoading();
  }, [orderBy]);

  return (
    <Container>
      <Loader isLoading={initialLoading} />
      <Header />
      <FilterContent>
        <Filters
          onSearch={(e) => setSearchTerm(e)}
          onToggleOrderBy={handleToggleOrderBY}
          orderBy={orderBy}
        />
      </FilterContent>
      <ButtonContent>
        <Button
          text="Novo usuário"
          size="small"
          isLoading={isLoading}
          disabled={isLoading}
          onClick={() => setIsModalToCreateUserOpen(true)}
        />
        <Button
          text="Rotas"
          size="small"
          isLoading={isLoading}
          disabled={isLoading}
          onClick={getRoutes}
        />
      </ButtonContent>

      <Content>
        {usersFiltered.map((user) => (
          <CardUser
            user={user}
            onClick={() => handleSelectUser(user)}
            key={user?.id}
          />
        ))}
      </Content>
      <Modal
        title="Gerencimanento de rotas"
        visible={isModalToViewRoutesOpen}
        hasScroll
        onClose={() => setIsModalToViewRoutesOpen(false)}
      >
        {routes.map((user) => (
          <CardRoute key={user?.id} user={user} />
        ))}
      </Modal>

      <Modal
        title="Cadastrar usuário"
        visible={isModalToCreateUserOpen}
        hasScroll={false}
      >
        <CreateUser
          onCreateUser={getUsers}
          onClose={() => setIsModalToCreateUserOpen(false)}
        />
      </Modal>

      <Modal
        title={`Deseja deletar o usuário ${user?.name}`}
        visible={isModalToDeleteUserOpen}
        hasScroll={false}
      >
        <CardDelete
          user={user}
          onDeleteUser={getUsers}
          onClose={() => setIsModalToDeleteUserOpen(false)}
        />
      </Modal>

      <CustomToast
        color={toast?.color}
        text_color="#fff"
        direction="top-center"
        duration={3000}
        message={toast?.message}
      />
    </Container>
  );
}
