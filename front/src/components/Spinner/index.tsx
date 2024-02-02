import { ReactComponent as Loading } from "../../assets/icons/loader.svg";

import { ISpinner } from "../../types/Spinner";
import { StyledSpinner } from "./styles";

export default function Spinner({ size, color }: ISpinner) {
  return (
    <StyledSpinner>
      <Loading width={size} height={size} fill={color} />
    </StyledSpinner>
  );
}
