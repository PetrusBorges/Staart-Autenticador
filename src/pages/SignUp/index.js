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

//utils
import toast from "../../utils/toast"

export default function Login() {

  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const navigate = useNavigate()

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault()

      setIsSubmit(true)

      await signUp(email, password)
      toast({
        type: 'success',
        text: 'Usuário cadastrado com sucesso!',
        duration: 3000,
      })
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao tentar cadastrar usuário!',
        duration: 3000,
      })
    } finally {
      setIsSubmit(false)
      navigate('/')
    }
  }

  return (
    <Container>
      <h1>SignUp</h1>

      <Form onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmail}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          maxLength="6"
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          maxLength="6"
        />

        <ButtonContainer>
          <Button
            type="submit"
            disabled={isSubmit}
            isLoading={isSubmit}
          >
            SignUp
          </Button>
        </ButtonContainer>
      </Form>

      <Footer>
        <Link to="/">Already have an account</Link>
        <Link to="/forgot-password">Forgot password</Link>
      </Footer>
    </Container>
  )
}
