import styled, { css } from "styled-components";
import { IButton } from "../../types/Button";

const buttonVariants = {
  small: css`
    width: 120px;
  `,
  medium: css`
    width: 150px;
  `,
  large: css`
    width: 200px;
  `,
};

export const Content = styled.button<Partial<IButton>>`
  ${({ size }) => buttonVariants[size!] || buttonVariants.medium}

  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.button};
  border: none;
  font-size: ${({ theme }) => theme.font.size.sm}em;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text_secondary};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: #242424;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }

  transition: all 450ms;
`;
