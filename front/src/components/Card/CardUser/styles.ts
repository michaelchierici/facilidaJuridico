import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 120px;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 16px;
  border-radius: 4px;
  flex-direction: column;
  margin: 8px;
  box-shadow: 2px 2px 12px #1e1e1e;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 4px;
`;

export const Title = styled.h3`
  text-align: center;
  margin: 4px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: ${({ theme }) => theme.font.size.sm}em;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  svg {
    cursor: pointer;
  }
`;
