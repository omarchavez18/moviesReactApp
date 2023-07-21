import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../NavBar/Input'
import Button from '../NavBar/Button'
import stylesButton from './../../Styles/dayImage/button.module.scss'

import loginStyles from '../../Styles/loginWithLocalStorage/login.module.scss'

const Login = () => {
  const [email, setEmail] = useState('john11@gmail.com')
  const [password, setPassword] = useState('surf')
  const navigate = useNavigate()

  const errorMessage = validate(email, password)

  useEffect(() => {
    const getEmail = localStorage.getItem('emailData') === 'john11@gmail.com'
    const getPassword = localStorage.getItem('passwordData') === 'surf'

    if (getEmail && getPassword) {
      navigate('/')
    }
  }, [navigate])

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function validate() {
    if (!email.includes('@')) {
      return
    }
    if (password.length < 4) {
      return 'Password must contain 4 characters at least'
    }
  }

  function logIn(event) {
    event.preventDefault()
    if (email === 'john11@gmail.com' && password === 'surf') {
      localStorage.setItem('emailData', email)
      localStorage.setItem('passwordData', password)
      navigate('/')
    }
  }

  return (
    <div className={`${loginStyles.firstDiv}`}>
      <h2 style={{ textAlign: 'center', color: 'white' }}>NASA log In</h2>

      <div className={`${loginStyles.loginBody}`}>
        <form className={`${loginStyles.form}`}>
          <label>Email:</label>
          <Input
            type='text'
            name='email'
            placeholder='Example:john11@gmail.com'
            autoComplete='on'
            value={email}
            onChange={handleEmail}
          />

          <label>Password:</label>
          <Input
            type='password'
            name='password'
            placeholder='surf'
            autoComplete='on'
            value={password}
            onChange={handlePassword}
          />
          <p>{errorMessage}</p>

          <Button
            className={`${stylesButton.dayImgBtn}`}
            onClick={logIn}
            disabled={errorMessage}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
