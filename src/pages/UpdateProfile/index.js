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
      toast({
        type: 'success',
        text: 'Usuário atualizado com sucesso!',
        duration: 3000,
      })
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao atualizar o usuário!',
        duration: 3000,
      })
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
