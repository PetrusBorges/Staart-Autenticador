//styled
import { Container } from "./styles"
import GlobalStyled from '../../assets/styles/global'
import { ThemeProvider } from "styled-components"
import DefaultStyles from "../../assets/styles/themes/default"

//react-router
import { BrowserRouter } from "react-router-dom"
import ReactRoutes from "../../Routes"

//context
import AuthProvider from "../../context/authContext"

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultStyles}>
        <AuthProvider>
          <GlobalStyled />
          <Container>
            <ReactRoutes />
          </Container>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
