import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
  padding: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: ${({ theme }) => theme.font.size.md}em;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`;
