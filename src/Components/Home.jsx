import Card from './Card'
import NavBar from './NavBar/NavBar'
import Carousel from './carousel/Carousel'
import { Routes, Route } from 'react-router-dom'
import DayImg from './dayImage/DayImg'
import Login from './login/Login'
import Cards from './cards/Cards'

function Home() {
  return (
    <>
      <NavBar />
      <Cards />

      <Routes>
        {/* <Route path='/' element={<DayImg />} /> */}
        <Route path='/DayImage' element={<DayImg />} />
        <Route path='/Card' element={<Card />} />
        <Route path='/Carousel' element={<Carousel />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Home
