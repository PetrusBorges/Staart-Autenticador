//styled
import { Container, Form, ButtonContainer } from "./styles"
import { Input } from "../../components/Input"

//components
import Button from "../../components/Button"
import Footer from "../../components/Footer"

//react-router
import { useNavigate, Link } from "react-router-dom"

//react
import { useAuth } from "../../context/authContext"
import { useState } from "react"

export default function Login() {

  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const navigate = useNavigate()

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault()

      setIsSubmit(true)

      await resetPassword(email)

      alert('Email enviado com sucesso!')
    } catch {
      alert('Ocorreu um erro ao resetar sua senha!')
    } finally {
      setIsSubmit(false)
      navigate('/')
    }
  }

  return (
    <Container>
      <h1>Recover your password</h1>

      <Form onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmail}
        />

        <ButtonContainer>
          <Button
            type="submit"
            disabled={isSubmit}
            isLoading={isSubmit}
          >
            Recover
          </Button>
        </ButtonContainer>
      </Form>

      <Footer>
        <Link to="/">Login</Link>
        <Link to="/signup">SignUp</Link>
      </Footer>
    </Container>
  )
}
