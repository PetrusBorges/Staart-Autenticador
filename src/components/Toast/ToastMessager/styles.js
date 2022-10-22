import styled, { css } from "styled-components";

const containerVariants = {
  success: css`
    background: ${({ theme }) => theme.colors.background.successBackground};
  `,
  danger : css`
    background: ${({ theme }) => theme.colors.background.dangerBackground};
  `
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  padding: 16px 32px;
  border-radius: 4px;

  ${({ type }) => containerVariants[type]}

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`
