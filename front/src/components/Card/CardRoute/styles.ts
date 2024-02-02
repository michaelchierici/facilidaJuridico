import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  flex-direction: column;
  gap: 16px;
  border-bottom-width: 1px solid black;
`;

export const Content = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: ${({ theme }) => theme.font.size.sm}em;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Footer = styled.div`
  width: 100%;
  padding: 16px;
`;
