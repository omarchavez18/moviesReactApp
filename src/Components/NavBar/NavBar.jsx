import React from 'react'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'
import LI from './Li'
import Hyperlink from './Hyperlink'
import styles from '../../Styles/NavBar/hyperlink.module.scss'
const NavBar = () => {
  return (
    <nav className={` navbar navbar-expand-lg bg-dark p-3 fixed-to`}>
      <div className='container w-50 m-0'>
        <Logo />
        <form className='d-flex' role='search'>
          <Input />
          <Button className={'btn btn-outline-warning'}>Search</Button>
        </form>
      </div>

      <section className='ms-auto'>
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
              <Hyperlink
                href={'#movies'}
                className={`nav-link ${styles.hyperlink}`}
              >
                Movies
              </Hyperlink>
            </LI>
            <LI className={`nav-item `}>
              <Hyperlink
                href={'#series'}
                className={`nav-link ${styles.hyperlink}`}
              >
                Series
              </Hyperlink>
            </LI>
            <LI className={'nav-item'}>
              <Hyperlink
                href={'#about'}
                className={`nav-link ${styles.hyperlink}`}
              >
                About Us
              </Hyperlink>
            </LI>
          </ul>
        </div>
      </section>
    </nav>
  )
}

export default NavBar
