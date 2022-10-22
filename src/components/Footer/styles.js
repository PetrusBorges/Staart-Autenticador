import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-left: 24px;
    text-decoration: none;
    transition: all 0.5s ease;
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.colors.gray.gray6};

    &:hover {
      color: ${({ theme }) => theme.colors.blue.blueLight};
      border-color: ${({ theme }) => theme.colors.blue.blueLight};
    }
  }
`
