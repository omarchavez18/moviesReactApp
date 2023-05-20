import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const errorMessage = validate(email, password)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        login(email, password)
      }}
    >
      <input
        type='text'
        name='email'
        placeholder='Email'
        autoComplete='off'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>

      <input
        type='password'
        name='password'
        placeholder='Password'
        autoComplete='off'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <p>{errorMessage}</p>

      <button type='submit' disabled={errorMessage}>
        Login
      </button>
    </form>
  )
}

const login = (email, password) => {
  email === 'omar.ocgdv@hotmail.com' && password === 'chelsea'
    ? alert('Access Granted!!')
    : alert('Access Denied!!')
}

const validate = (email, password) => {
  if (!email.includes('@')) {
    return 'Incorrect Email!!'
  }
  if (password.length < 4) {
    return 'Incorrect Password'
  }
}

export default Login
