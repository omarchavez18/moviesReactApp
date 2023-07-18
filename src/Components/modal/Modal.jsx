import { useState } from 'react'
import Image from '../carousel/Image'
import styles from './../../Styles/modal/modal.module.scss'

const Modal = ({ selectedImage, onStateChange }) => {
  const [value, setValue] = useState()

  function handleChange() {
    setValue(false)
    onStateChange(value)
  }

  return (
    <>
      {
        <div className={styles.overlay}>
          <Image src={selectedImage} className={styles.img} />
          <p onClick={handleChange}>X</p>
        </div>
      }
    </>
  )
}

export default Modal
