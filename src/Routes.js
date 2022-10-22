//Routes
import { Routes, Route } from 'react-router-dom'

//Pages
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'
import UpdateProfile from './pages/UpdateProfile'
import ForgetPassword from './pages/ForgetPassword'
import Error404 from './pages/Error404'

export default function ReactRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
