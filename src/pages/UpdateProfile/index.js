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

export default function UpdateProfile() {

  const { currentUser, updateEmailAddress } = useAuth()
  const [email, setEmail] = useState(currentUser.email)
  const [isSubmit, setIsSubmit] = useState(false)

  const navigate = useNavigate()

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault()

      setIsSubmit(true)

      await updateEmailAddress(email)
    } catch {
      alert('Ocorreu um erro ao atualizar o usuário!')
    } finally {
      setIsSubmit(false)
      navigate('/')
    }
  }

  return (
    <Container>
      <h1>Update Profile</h1>

      <Form onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          value={email}
          onChange={handleEmail}
        />

        <ButtonContainer>
          <Button
            type="submit"
            disabled={isSubmit}
            isLoading={isSubmit}
          >
            Update
          </Button>
        </ButtonContainer>

        <Footer>
          <Link to="/userprofile">Voltar</Link>
        </Footer>
      </Form>
    </Container>
  )
}
