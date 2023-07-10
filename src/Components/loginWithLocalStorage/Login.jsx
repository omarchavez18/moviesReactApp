import React from 'react'
import { useState } from 'react'
import Home from '../Home'
import Button from '../NavBar/Button'
import stylesButton from './../../Styles/dayImage/button.module.scss'

import loginStyles from '../../Styles/loginWithLocalStorage/login.module.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const errorMessage = validate(email, password)

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
    if (email === 'john11@gmail.com' && password === 'surf') {
      localStorage.setItem('emailData', email)
      localStorage.setItem('passwordData', password)
    }

    event.preventDefault()
  }
  let getEmail = localStorage.getItem('emailData')
  let getPassword = localStorage.getItem('passwordData')

  return (
    <>
      {getEmail === email && getPassword === password ? (
        <Home />
      ) : (
        <div className={`${loginStyles.firstDiv}`}>
          <h2 style={{ textAlign: 'center', color: 'white' }}>NASA log In</h2>

          <div className={`${loginStyles.loginBody}`}>
            <form className={`${loginStyles.form}`}>
              <label>Email:</label>
              <input
                type='text'
                name='email'
                placeholder='Example:john11@gmail.com'
                autoComplete='off'
                value={email}
                onChange={handleEmail}
              />

              <label>Password:</label>
              <input
                type='password'
                name='password'
                placeholder='Example:ferrari'
                autoComplete='off'
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
      )}
    </>
  )
}

export default Login
