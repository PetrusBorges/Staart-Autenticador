import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white.whiteLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue.blueLight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white.whiteLight};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray.gray6};
  }
`
