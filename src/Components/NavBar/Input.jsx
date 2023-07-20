import React from 'react'
import styles from './../../Styles/NavBar/search.module.scss'

const Input = ({ className, type, children, ...otherInfo }) => {
  return (
    <input className={styles.input} type={type} {...otherInfo}>
      {children}
    </input>
  )
}

export default Input
