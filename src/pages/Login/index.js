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

  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const navigate = useNavigate()

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault()

      setIsSubmit(true)

      await signIn(email, password)

      navigate('/userprofile')
      toast({
        type: 'success',
        text: 'Login feito com sucesso!',
        duration: 3000,
      })
    } catch {
      toast({
        type: 'danger',
        text: 'Erro ao fazer login!',
        duration: 3000,
      })
      navigate('/')
    } finally {
      setIsSubmit(false)
    }
  }

  return (
    <Container>
      <h1>Login</h1>

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

        <ButtonContainer>
          <Button
            type="submit"
            disabled={isSubmit}
            isLoading={isSubmit}
          >
            Login
          </Button>
        </ButtonContainer>
      </Form>

      <Footer>
        <Link to="/signup">SignUp</Link>
        <Link to="/forgot-password">Forgot password</Link>
      </Footer>
    </Container>
  )
}
