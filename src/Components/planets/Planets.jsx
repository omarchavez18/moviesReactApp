import React, { useEffect, useState } from 'react'
import Card from '../Card'
import LI from '../NavBar/Li'
import Input from '../NavBar/Input'
import Button from '../NavBar/Button'
import styles from './../../Styles/planets/planets.module.scss'

const Planets = () => {
  const [planetsInfo, setPlanetsInfo] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [topicToSearch, setTopicToSearch] = useState('')

  function search(e) {
    setInputValue(e.target.value)
  }

  function handleConfirm(e) {
    e.preventDefault()
    setTopicToSearch(inputValue)
  }

  const apiUrl =
    'https://images-api.nasa.gov/search?q=planets&description=planets&media_type=image'

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setPlanetsInfo(data))
  }, [])

  const allPlanets = []
  planetsInfo?.collection?.items?.map((info) => {
    return allPlanets.push({
      title: info?.data[0]?.title,
      href: info?.links[0]?.href,
      description: info?.data[0]?.description,
    })
  })

  function filterByText() {
    return allPlanets.filter((planet) => {
      return (
        planet?.title.toLowerCase().includes(topicToSearch.toLowerCase()) ||
        planet?.description.toLowerCase().includes(topicToSearch.toLowerCase())
      )
    })
  }
  console.log(filterByText())

  return (
    <>
      <form style={{ margin: '1rem' }}>
        <label style={{ fontSize: '1.5rem', color: 'white' }}>
          {' '}
          Search some planet:
        </label>
        <Input
          className={styles.input}
          placeholder='jupiter'
          type='text'
          value={inputValue}
          onChange={search}
        />
        <Button
          disabled={!inputValue}
          className={'btn btn-outline-primary'}
          onClick={handleConfirm}
        >
          Search
        </Button>
      </form>

      <ul className={styles.ul}>
        {topicToSearch === ''
          ? allPlanets.map((planet, i) => {
              return (
                <LI key={i} className={styles.li}>
                  <Card
                    classNameImg={styles.img}
                    src={planet.href}
                    title={planet.title}
                    text={planet.description}
                  />
                </LI>
              )
            })
          : filterByText().map((planet, i) => {
              return (
                <LI key={i} className={styles.li}>
                  <Card
                    classNameImg={styles.img}
                    src={planet.href}
                    title={planet.title}
                    text={planet.description}
                  />
                </LI>
              )
            })}
      </ul>
    </>
  )
}

export default Planets
