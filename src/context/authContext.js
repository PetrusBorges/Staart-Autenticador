//hooks
import { useState, useContext, useEffect, createContext } from "react";

//PropTypes
import PropTypes from 'prop-types'

//firebase
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()

  function signUp(email, passward) {
    return createUserWithEmailAndPassword(auth, email, passward)
  }

  function signIn(email, passward) {
    return signInWithEmailAndPassword(auth, email, passward)
  }

  function updateEmailAddress(newEmail) {
    return updateEmail(currentUser, newEmail)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function logOut() {
    return signOut(auth)
  }

  useEffect(() => {
    function unsubscribe() {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user)
      })
    }

    unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        updateEmailAddress,
        resetPassword,
        logOut,
        currentUser: currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
