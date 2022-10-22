import styled from "styled-components";

export const StyledButton = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s ease;
  background: ${({ theme }) => theme.colors.blue.blueLight};
  color: ${({ theme }) => theme.colors.white.whiteLight};

  &:hover {
    background: ${({ theme }) => theme.colors.blue.blueNormal};
  }

  &:active {
    background: ${({ theme }) => theme.colors.blue.blueDark};
  }

  &[disabled] {
    cursor: not-allowed !important;
    background: ${({ theme }) => theme.colors.gray.gray6} !important;
  }
`
