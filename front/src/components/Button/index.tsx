import { useTheme } from "styled-components";
import { IButton } from "../../types/Button";
import Spinner from "../Spinner";
import { Content } from "./styles";

export default function Button({
  text,
  size,
  isLoading,
  disabled,
  onClick,
}: IButton) {
  const theme = useTheme();

  return (
    <Content onClick={onClick} size={size} disabled={disabled}>
      {isLoading ? (
        <Spinner color={theme.colors.text_primary} size={50} />
      ) : (
        text
      )}
    </Content>
  );
}
