import Card from './Card'
import NavBar from './NavBar/NavBar'
import Carousel from './carousel/Carousel'
import { Routes, Route } from 'react-router-dom'
import DayImg from './dayImage/DayImg'
import Login from './login/Login'

function Home() {
  return (
    <>
      <NavBar />
      <DayImg />

      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/Carousel' element={<Carousel />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Home
