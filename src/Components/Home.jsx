import Image from './carousel/Image'
import video from './../video/nasaApollo11.mp4'
import armstrong from './../images/apollo11/1.webp'
import aldrin from './../images/apollo11/15.webp'
import collins from './../images/apollo11/16.webp'
import styles from './../Styles/home/home.module.scss'
import LI from './NavBar/Li'
import { useState } from 'react'
import Modal from './modal/Modal'

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  //this function works with the modal component to send it back the value to close the modal after pressing "x" on the modal
  function handleVisibleChange(newValue) {
    setModalVisible(newValue)
  }

  //disable scroll when modal its open
  modalVisible
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')

  //function to import img from the folder
  function importImages() {
    let images = []
    for (let i = 2; i <= 14; i++) {
      const image = require(`./../images/apollo11/${i}.webp`)
      images.push(image)
    }
    return images
  }
  let importedImages = importImages()

  //this function pass info to modal component and allow visiblity
  function handleSelectedImg(e) {
    setSelectedImage(e.target.src)
    setModalVisible(true)
  }

  return (
    <>
      <div>
        <section>
          <Image
            className={styles.firstImg}
            src='https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/images/466548main_as16-113-18339_full.jpg'
          />
        </section>
      </div>

      {/* history and video */}
      <div className={styles.historyAndVideo}>
        <section className={styles.history}>
          <h2>Mission Apollo 11.</h2>
          <p>
            The mission that took U.S. astronauts to the moon was Apollo 11,
            NASA´s fifth crewed Apollo mission. the astronauts onboard the
            spacecraft were Neil Armstrong, Edwin "Buzz" Aldrin, and Michael
            collins. On the morning of July 20 of 1969, Armstrong and Aldrin
            crawled from the command module, Columbia, through a tunnel to the
            lunar module, Eagle. Armstrong and Aldrin piloted eagle to the lunar
            surface, touching down in the sea of tranquility at 4:17 PM U.S.
            Armstrong radioed "Houston, tranquility base here, the eagle has
            landed", at 10:56 PM on 20 July 1969 Armstrong stepped out onto the
            lunar soil with the words "That´s one small step for a man, one
            giant leap for mankind".
            <br />
            Armstrong and Aldrin set up a device to measure the composition of
            the solar wind reaching the moon, a device to receive laser beams
            from astronomical observatories on Earth to determine the exact
            distance of the two bodies from one to each other, and a passive
            seismometer to measure moonquakes and meteor impacts.
            <br />
            they also took about 23 kg of rock and soil samples, took many
            photographs, and maintained constant communication with mission
            control in Houston, Texas. After 21 hours and 38 minutes on the
            moon´s surface the astronauts used eagle´s ascent stage to launch it
            back into lunar orbit. splashdown of Apollo 11 occurred in the
            pacific ocean about 1,400 KM southwest of Hawaii on July 24, after
            the return, the astronauts were quarantined for 21 days from the
            time eagle had left the moon.
          </p>
        </section>

        <video autoPlay loop muted className={styles.video}>
          <source src={video} type='video/mp4' />
        </video>
      </div>

      {/* images of astronauts */}
      <div className={styles.container}>
        <h2>Apollo 11 crew</h2>
        <div className={styles.astro}>
          <img src={armstrong} alt='neil armstrong' />
          <img src={aldrin} alt='buzz aldrin' />
          <img src={collins} alt='michael collins' />
        </div>
      </div>

      {/* Gallery */}
      <div className={styles.divPicturesContainer}>
        <h2>Gallery</h2>
        <ul className={styles.picturesContainer}>
          {importedImages.map((img, i) => {
            return (
              <LI key={i}>
                <Image
                  className={styles.picture}
                  src={img}
                  alt=''
                  onClick={handleSelectedImg}
                />
              </LI>
            )
          })}
        </ul>
      </div>

      {/* MODAL */}
      {modalVisible && (
        <Modal
          onStateChange={handleVisibleChange}
          selectedImage={selectedImage}
        />
      )}
    </>
  )
}

export default Home
