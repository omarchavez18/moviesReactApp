/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Input from '../NavBar/Input'
import Button from '../NavBar/Button'
import styles from '../../Styles/dayImage/button.module.scss'
import stylesimg from '../../Styles/dayImage/searchImg.module.scss'
import stylescards from '../../Styles/mars/mars.module.scss'

import LI from '../NavBar/Li'

const Mars = () => {
  let [data, setData] = useState([])
  const [searchDate, setSearchDate] = useState('2021-08-18')
  const [roverCamera, setRoverCamera] = useState('navcam')

  let apiKey = 'KJLC8xavAOn0VCZNxMNvNQYRUnpArbRZs25D3HZu'
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${searchDate}&camera=${roverCamera}&api_key=${apiKey}`

  let cameras = [
    'FHAZ',
    'RHAZ',
    'MAST',
    'CHEMCAM',
    'MAHLI',
    'MARDI',
    'NAVCAM',
    'PANCAM',
    'MINITES',
  ]

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data.photos))
      .catch((error) => {
        console.log(error.message)
      })
  }, [apiUrl])

  {
    data = data.length >= 10 ? data.splice(0, 9) : data
  }
  return (
    <>
      <div className={stylesimg.titleContainer}>
        <h2>Mars Rover Photos.</h2>
        <h3>Search for the Image with a specific date: {searchDate}</h3>
        <h3>
          {' '}
          Rover Camera Selected: {roverCamera} {searchDate}
        </h3>
      </div>

      <form
        style={{ margin: 'auto', width: '85%' }}
        onSubmit={(event) => {
          event.preventDefault()
          setSearchDate(event.target.searchDate.value)
          setRoverCamera(event.target.roverCamera.value)
        }}
      >
        <label className={stylescards.label} htmlFor='roverCamera-select'>
          Select a date:
        </label>
        <Input
          className={stylesimg.input}
          type='date'
          required
          name='searchDate'
          placeholder='Example: 2021-08-18'
        />

        {/* CHOOSE A ROVER CAMERA OPTION */}
        <label className={stylescards.label} htmlFor='roverCamera-select'>
          Choose a rover camera:
        </label>
        <select name='roverCamera' required>
          <option value=''>--choose an option--</option>
          {cameras.map((camera, i) => {
            return <option key={i}>{camera.toLowerCase()}</option>
          })}
        </select>
        <Button className={styles.dayImgBtn} type='submit'>
          Search
        </Button>
      </form>
      <ul className={stylescards.marsList}>
        {data.length === 0 ? (
          <section className={stylesimg.diverror}>
            <div className={stylesimg.tryanotherdate}>
              <p>
                there´s no result, try another camera or date and camera
                combination{' '}
              </p>
            </div>
          </section>
        ) : (
          data.map((info, i) => {
            return (
              <>
                <LI key={i} className={stylescards.liChildren}>
                  {
                    <Card
                      className={stylescards.div}
                      classNameImg={`${stylescards.img} ${'card-img-top'}  `}
                      src={info.img_src}
                      title={info.camera.full_name}
                    >
                      {`Rover´s name: ${info.rover.name}`}
                      <br />
                      {`landing date: ${info.rover.landing_date}`}
                      <br />
                      {`status: ${info.rover.status}`}
                    </Card>
                  }
                </LI>
              </>
            )
          })
        )}
      </ul>
    </>
  )
}

export default Mars
