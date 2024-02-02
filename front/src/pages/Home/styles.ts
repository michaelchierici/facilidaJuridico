import styled, { css } from "styled-components";
import { desktop, laptop, mobile } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const FilterContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  ${mobile(css`
    flex-direction: column;
    justify-content: space-between;
  `)}

  ${laptop(css`
    flex-direction: column;
    justify-content: space-between;
  `)}

  ${desktop(css`
    flex-wrap: wrap;
    justify-content: center;
  `)}
`;
