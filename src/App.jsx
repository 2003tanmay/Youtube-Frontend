import React from 'react'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import { useSelector } from 'react-redux'

const App = () => {
  const authStatus = useSelector(state => state.user.isLoggedIn)
  return (
    <div>
      {authStatus ? <LogoutForm/> : <LoginForm/>}
    </div>
  )
}

export default App
