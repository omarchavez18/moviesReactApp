import React from 'react'
//import styles from './../../Styles/NavBar/search.module.scss'

const Input = ({ className, type, children, ...otherInfo }) => {
  return (
    <input type={type} className={className} {...otherInfo}>
      {children}
    </input>
  )
}

export default Input
