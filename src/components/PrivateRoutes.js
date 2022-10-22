//react-router
import { Navigate } from 'react-router-dom'

//react
import { useAuth } from '../context/authContext'

//PropTypes
import PropTypes from 'prop-types'

export default function ProtectedRoute({ children }) {

  const { currentUser } = useAuth()

  if(!currentUser) {
    return <Navigate to="/" replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}
