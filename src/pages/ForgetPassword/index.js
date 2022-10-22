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

      toast({
        type: 'success',
        text: 'Email enviado com sucesso!',
        duration: 3000,
      })
    } catch {
      toast({
        type: 'danger',
        text: 'Email inválido!',
        duration: 3000,
      })
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
