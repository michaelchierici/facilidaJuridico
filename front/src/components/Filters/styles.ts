import { styled } from "styled-components";

interface Props {
  orderBy: "asc" | "desc";
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 16px;
  svg {
    transition: transform 0.2s ease-in;
    transform: ${({ orderBy }) =>
      orderBy === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
    cursor: pointer;
  }
`;
