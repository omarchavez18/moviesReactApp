import React from 'react'
import NavBar from './NavBar/NavBar'
import Carousel from './carousel/Carousel'
import { Routes, Route, useNavigate } from 'react-router-dom'
import DayImg from './dayImage/DayImg'
import Login from './loginWithLocalStorage/Login'
import Mars from './mars/Mars'
import Search from './search/Search'
import Home from './Home'
import { useEffect, useState } from 'react'
import Planets from './planets/Planets'
import SelectedPlanet from './selectedPlanet/SelectedPlanet'
import Footer from './footer/Footer'

export const Container = React.createContext()

function App() {
  //for planets component
  const [planetsInfo, setPlanetsInfo] = useState('')
  //from planets to selectedPlanet component
  const [selectedPlanet, setSelectedPlanet] = useState('null')

  //search component
  const [topicToSearch, setTopicToSearch] = useState('')
  let [showNavbar, setShowNavbar] = useState(false)
  const navigate = useNavigate()

  const apiUrl =
    'https://images-api.nasa.gov/search?q=planets&description=planets&media_type=image'

  //LOGIN SECTION
  useEffect(() => {
    const getEmail = localStorage.getItem('emailData') === 'john11@gmail.com'
    const getPassword = localStorage.getItem('passwordData') === 'surf'
    if (getEmail && getPassword) {
      setShowNavbar(true)
    }
    if (!(getEmail && getPassword)) {
      navigate('/Login')
    }
  }, [navigate])

  //for planets component
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

  return (
    <Container.Provider
      value={{
        allPlanets,
        topicToSearch,
        setTopicToSearch,
        selectedPlanet,
        setSelectedPlanet,
        planetsInfo,
      }}
    >
      {showNavbar && <NavBar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DayImage' element={<DayImg />} />
        <Route path='/MarsRoverPhotos' element={<Mars />} />
        <Route path='/Carousel' element={<Carousel />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Planets' element={<Planets />} />
        <Route path='/Planets/:selectedPlanet' element={<SelectedPlanet />} />
      </Routes>
      {showNavbar && <Footer />}
    </Container.Provider>
  )
}

export default App
