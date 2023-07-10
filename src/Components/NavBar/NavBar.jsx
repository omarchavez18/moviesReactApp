import React from 'react'
import { useState } from 'react'
import { GoPerson } from 'react-icons/go'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'
import LI from './Li'
import { NavLink } from 'react-router-dom'
import navStyles from '../../Styles/NavBar/nav.module.scss'
import styles from '../../Styles/NavBar/hyperlink.module.scss'
import searchStyles from '../../Styles/NavBar/search.module.scss'
import titleSectionStyles from '../../Styles/NavBar/titleSection.module.scss'

const NavBar = () => {
  const [topicToSearch, setTopicToSearch] = useState('')

  function searchTopic(e) {
    setTopicToSearch(e.target.value)
  }

  //this exit the login
  function logout() {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <nav
      className={` navbar navbar-expand-lg bg-dark p-3 fixed-to ${navStyles.nav}`}
    >
      {/* LOGO AND NASA NAME */}
      <div className={`${titleSectionStyles.titleSection}`}>
        <section className={`${titleSectionStyles.nameAndLogo}`}>
          <Logo />
          <h1>NASA</h1>
        </section>

        {/* LOGIN SECTION WITH USER ICON */}
        <section className={`${titleSectionStyles.login}`}>
          <Button className={'btn btn-outline-primary'} onClick={logout}>
            <GoPerson />
            LogOut
          </Button>
        </section>
      </div>

      {/* SEARCH BAR SECTION */}
      <div className='container w-50 m-0'>
        <form className={`d-flex ${searchStyles.search} `} role='search'>
          <Input
            style={{ borderRadius: '5.5rem' }}
            className={` form-control me-2`}
            type={'search'}
            placeholder='Search planets, stars maybe aliens...?'
            aria-label='Search'
            value={topicToSearch}
            onChange={searchTopic}
          />
          <Button className={'btn btn-outline-primary'}>Search</Button>
        </form>
      </div>

      <section>
        {/* hamburger menu */}
        <Button
          className={'navbar-toggler bg-white'}
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'
        >
          {/* hamburger icon's  */}
          <span className='navbar-toggler-icon '></span>
        </Button>

        {/* menu  */}
        <div className='collapse navbar-collapse' id='navmenu'>
          <ul className={`navbar-nav ms-auto `}>
            <LI className={'nav-item'}>
              <NavLink
                to='/DayImage'
                className={`nav-link ${styles.hyperlink}`}
              >
                Home |
              </NavLink>
            </LI>
            <LI className={'nav-item'}>
              <NavLink
                to='/marsRoverPhotos'
                className={`nav-link ${styles.hyperlink}`}
              >
                Mars Rover Photos |
              </NavLink>
            </LI>
            <LI className={`nav-item `}>
              <NavLink
                to={'/Carousel'}
                className={`nav-link ${styles.hyperlink}`}
              >
                Planets
              </NavLink>
            </LI>
          </ul>
        </div>
      </section>
    </nav>
  )
}

export default NavBar
