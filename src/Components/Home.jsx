import NavBar from './NavBar/NavBar'
import Carousel from './carousel/Carousel'
import { Routes, Route } from 'react-router-dom'
import DayImg from './dayImage/DayImg'
import Login from './loginWithLocalStorage/Login'
import Mars from './mars/Mars'

function Home() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/DayImage' element={<DayImg />} />
        <Route path='/MarsRoverPhotos' element={<Mars />} />
        <Route path='/Carousel' element={<Carousel />} />
        <Route path='/Login' element={<Login />} />{' '}
      </Routes>
    </>
  )
}

export default Home
