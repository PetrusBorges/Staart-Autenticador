//styled
import { Container, CardInfo } from "./styles"
import Button from "../../components/Button"

//react
import { useAuth } from "../../context/authContext"

//react-router
import { useNavigate, Link } from "react-router-dom"

export default function UserProfile() {

  const { currentUser, logOut } = useAuth()

  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logOut()
    } catch {
      alert('Ocorreu um erro ao tentar efetuar logout!')
    } finally {
      navigate('/')
    }
  }

  return (
    <Container>
      <div className="header">
        <h1>My Profile</h1>
        <Button
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <CardInfo>
        <p>Email</p>
        <div className="container">
          <p>{currentUser.email}</p>
          <Link to="/update-profile">Change Email</Link>
        </div>
      </CardInfo>
    </Container>
  )
}
