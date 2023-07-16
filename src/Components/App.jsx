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

export const Container = React.createContext()

function App() {
  const [topicToSearch, setTopicToSearch] = useState('')

  let [showNavbar, setShowNavbar] = useState(false)

  const navigate = useNavigate()

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

  return (
    <Container.Provider
      value={{
        topicToSearch,
        setTopicToSearch,
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
    </Container.Provider>
  )
}

export default App
