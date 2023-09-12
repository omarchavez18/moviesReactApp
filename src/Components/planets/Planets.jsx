import React, { useState, useContext } from 'react'
import Card from '../Card'
import LI from '../NavBar/Li'
import Input from '../NavBar/Input'
import Button from '../NavBar/Button'
import styles from './../../Styles/planets/planets.module.scss'
import { NavLink } from 'react-router-dom'
import { Container } from '../App'
import stylesimg from '../../Styles/dayImage/searchImg.module.scss'

const Planets = () => {
  const [inputValue, setInputValue] = useState('')
  const [topicToSearch, setTopicToSearch] = useState('')
  const { allPlanets, setSelectedPlanet } = useContext(Container)

  function handleSelectedPlanet(title) {
    setSelectedPlanet(title)
  }

  function search(e) {
    setInputValue(e.target.value)
  }

  function handleConfirm(e) {
    e.preventDefault()
    setTopicToSearch(inputValue)
  }

  function filterByText() {
    return allPlanets.filter((planet) => {
      return (
        planet?.title.toLowerCase().includes(topicToSearch.toLowerCase()) ||
        planet?.description.toLowerCase().includes(topicToSearch.toLowerCase())
      )
    })
  }

  function reducePath(string) {
    return string
      .split(' ')
      .map((str) => {
        return str[0] + str.substring(1)
      })
      .join('')
      .toLowerCase()
  }

  return (
    <>
      <form className={styles.form} style={{ margin: '1rem' }}>
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
        {topicToSearch === '' ? (
          allPlanets.map((planet, i) => {
            return (
              <LI key={i} className={styles.li}>
                <NavLink to={`/Planets/${reducePath(planet.title)}`}>
                  <Card
                    classNameImg={styles.img}
                    src={planet.href}
                    title={planet.title}
                    text={planet.description}
                    onCardClick={handleSelectedPlanet}
                  />
                </NavLink>
              </LI>
            )
          })
        ) : filterByText().length === 0 ? (
          <section className={stylesimg.diverror}>
            <div className={stylesimg.tryanotherdate}>
              <p>there´s no result, try another thing</p>
            </div>
          </section>
        ) : (
          filterByText().map((planet, i) => {
            return (
              <LI key={i} className={styles.li}>
                <NavLink to={`/Planets/${reducePath(planet.title)}`}>
                  <Card
                    classNameImg={styles.img}
                    src={planet.href}
                    title={planet.title}
                    text={planet.description}
                    onCardClick={handleSelectedPlanet}
                  />
                </NavLink>
              </LI>
            )
          })
        )}
      </ul>
    </>
  )
}

export default Planets
