import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white.whiteNormal};
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue.blueLight};
    margin-bottom: 24px;
  }
`

export const Form = styled.form``

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`
