import React from 'react'
import Image from '../carousel/Image'
import styles from '../../Styles/NavBar/logo.module.scss'
import logo from '../../images/nasaLogo.png'

const Logo = ({ href }) => {
  return <Image href={href} src={logo} className={styles.logo} />
}

export default Logo
