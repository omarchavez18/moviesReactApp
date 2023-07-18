import React from 'react'
import Image from '../carousel/Image'
import nasaLogo from './../../images/nasaLogo.png'
import style from './../../Styles/footer/footer.module.scss'

const Footer = () => {
  return (
    <div className={style.container}>
      <Image src={nasaLogo} />
      <div>
        <h3>National Aeronautics and Space Administration. </h3>
        <h4>
          Developed by:{' '}
          <a href='https://www.linkedin.com/in/omarchavezgdv/'>omarchavez18 </a>
        </h4>
      </div>
    </div>
  )
}

export default Footer
