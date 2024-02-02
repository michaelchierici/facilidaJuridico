import { ChangeEvent } from "react";
import { Input } from "../Input";
import { IFilters } from "../../types/Filters";
import { Container } from "./styles";
import { ReactComponent as OrderBy } from "../../assets/icons/orderby.svg";

export default function Filters({
  onToggleOrderBy,
  orderBy,
  onSearch,
}: IFilters) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Container orderBy={orderBy}>
      <Input
        type="text"
        placeholder="Buscar usuário"
        onChange={handleSearchChange}
      />
      <OrderBy onClick={onToggleOrderBy} />
    </Container>
  );
}
