import Image from '../carousel/Image'
import styles from './../../Styles/modal/modal.module.scss'

const Modal = ({ selectedImage }) => {
  return (
    <>
      {
        <div className={styles.overlay}>
          <Image src={selectedImage} className={styles.img} />
          <p>X</p>
        </div>
      }
    </>
  )
}

export default Modal
