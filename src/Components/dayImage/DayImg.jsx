import React from 'react'
import { useEffect, useState } from 'react'
import Image from '../carousel/Image'
import Input from '../NavBar/Input'
import Button from '../NavBar/Button'
import styles from '../../Styles/dayImage/button.module.scss'
import stylesimg from '../../Styles/dayImage/searchImg.module.scss'

const DayImg = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  const ApiKey = 'KJLC8xavAOn0VCZNxMNvNQYRUnpArbRZs25D3HZu'
  const Api = `https://api.nasa.gov/planetary/apod?date=${search}&api_key=${ApiKey}`

  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error.message)
      })
  }, [Api])

  return (
    <>
      <div className={stylesimg.titleContainer}>
        <h2>Image of the Day.</h2>
        <h3>Search the Image of the day with the date: {search}</h3>
      </div>

      <form
        style={{ margin: 'auto', width: '85%' }}
        onSubmit={(event) => {
          event.preventDefault()
          setSearch(event.target.search.value)
        }}
      >
        <Input
          className={stylesimg.input}
          type='date'
          required
          min={'1995-06-16'}
          name='search'
          placeholder='Example: 2021-08-18'
        />
        <Button className={styles.dayImgBtn} type='submit'>
          Search
        </Button>
      </form>

      <div className={stylesimg.imgAndInfoContainer}>
        <div className={stylesimg.imageContainer}>
          <Image className={stylesimg.imageStyle} src={data.url}></Image>
        </div>

        <section className={stylesimg.imageContainer}>
          <p>
            {' '}
            <strong>{data.title}</strong>.
          </p>
          <p>{data.explanation}</p>
          <p>
            Images Credit & Copyright: <em>{data.copyright}</em>.
          </p>
        </section>
      </div>
    </>
  )
}

export default DayImg
