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

//components
import ToastContainer from '../Toast/ToastContainer'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultStyles}>
        <AuthProvider>
          <GlobalStyled />
          <ToastContainer />
          <Container>
            <ReactRoutes />
          </Container>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
