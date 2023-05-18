import Card from './Card'
import NavBar from './NavBar/NavBar'
import Carousel from './carousel/Carousel'
import { Routes, Route } from 'react-router-dom'
import DayImg from './dayImage/DayImg'

function Home() {
  return (
    <>
      <NavBar />
      <DayImg />

      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/Carousel' element={<Carousel />} />
      </Routes>
    </>
  )
}

export default Home
