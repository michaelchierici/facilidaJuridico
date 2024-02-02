import styled, { css } from "styled-components";
import { easeIn, easeOut, modalIn, modalOut } from "../../styles/animations";

interface Props {
  isLeaving: boolean;
  hasScroll: boolean;
}

export const Overlay = styled.div<Partial<Props>>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: ${easeIn} 600ms;
  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${easeOut} 400ms forwards;
    `}
`;

export const Container = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.background};
  width: 350px;
  max-height: 500px;
  border-radius: 6px;

  animation: ${modalIn} 600ms;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${modalOut} 400ms;
    `}

  overflow-y: ${({ hasScroll }) => (hasScroll ? "scroll" : null)};
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 16px;
  padding: 16px;
  padding-right: 32px;
  flex: 1;
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text_secondary};
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-size: 16px;
    width: 36px;
    height: 56px;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
