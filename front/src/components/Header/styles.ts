import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #b6b6b6;
  border-bottom-width: 1px solid;
  box-shadow: 0px 2px 8px 0px #676767;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  padding-right: 16px;

  .title-content {
    display: flex;
    align-items: center;
    margin-right: auto;
    font-size: ${({ theme }) => theme.font.size.lg}em;
    color: ${({ theme }) => theme.colors.text_primary};
    padding-left: 16px;
  }

  .icon-content {
    padding-right: 16px;
    display: flex;
    justify-content: space-evenly;
    gap: 16px;
  }
`;
export const Title = styled.h3``;
