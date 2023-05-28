/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Input from '../NavBar/Input'
import Button from '../NavBar/Button'
import styles from '../../Styles/dayImage/button.module.scss'
import stylesimg from '../../Styles/dayImage/searchImg.module.scss'
import stylescards from '../../Styles/cards/cards.module.scss'
import LI from '../NavBar/Li'

const Cards = () => {
  let [data, setData] = useState([])
  const [searchDate, setSearchDate] = useState('')
  const [roverCamera, setRoverCamera] = useState('')

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
        <h3>Search the Image with an specific date: {searchDate}</h3>
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
        <Input
          className={stylesimg.input}
          type='date'
          required
          //   min={'2012-11-01'}
          name='searchDate'
          placeholder='Example: 2021-08-18'
        ></Input>

        {/* CHOOSE A ROVER CAMERA OPTION */}
        <label className={stylescards.label} htmlFor='roverCamera-select'>
          Choose a rover camera:
        </label>
        <select name='roverCamera' required>
          <option value=''>--Please choose an option--</option>
          {cameras.map((camera) => {
            return <option key={camera}>{camera.toLowerCase()}</option>
          })}
        </select>
        <Button className={styles.dayImgBtn} type='submit'>
          Search
        </Button>
      </form>
      <ul className={stylescards.marsList}>
        {data.map((info, i) => {
          return (
            <>
              <LI className={stylescards.liChildren}>
                {
                  <Card
                    clasName={`${stylescards.img} ${'card-img-top'}  `}
                    key={i}
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
        })}
      </ul>
    </>
  )
}

export default Cards
