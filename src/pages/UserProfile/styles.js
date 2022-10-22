import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

    h1 {
      color: ${({ theme }) => theme.colors.white.whiteNormal};
      border-bottom: 1px solid ${({ theme }) => theme.colors.blue.blueLight};
      width: 300px;
      margin-right: 50px;
    }
  }
`

export const CardInfo = styled.div`
  padding: 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray.gray5};

  p {
    color: ${({ theme }) => theme.colors.white.whiteNormal};
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
      margin-left: 50px;
      text-decoration: none;
      transition: all 0.5s ease;
      border-bottom: 1px solid transparent;
      color: ${({ theme }) => theme.colors.gray.gray6};

      &:hover {
        color: ${({ theme }) => theme.colors.blue.blueLight};
        border-color: ${({ theme }) => theme.colors.blue.blueLight};
      }
    }
  }
`
