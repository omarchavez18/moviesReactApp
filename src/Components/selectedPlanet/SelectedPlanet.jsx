import React from 'react'
import { useContext } from 'react'
import { Container } from '../App'
import Button from '../NavBar/Button'
import btnStyle from '../../Styles/dayImage/button.module.scss'

import styles from '../../Styles/selectedplanet/selectedplanet.module.scss'
import { NavLink } from 'react-router-dom'

const SelectedPlanet = () => {
  const { selectedPlanet, planetsInfo } = useContext(Container)

  return (
    <>
      {planetsInfo.collection.items.map((info, i) => {
        return (
          info?.data[0]?.title === selectedPlanet && (
            <div key={i} className={styles.container}>
              <img src={info?.links[0]?.href} alt='' />
              <section>
                <h4>
                  <span>Title:</span> {info?.data[0]?.title}
                </h4>
                <p>
                  <span>Description:</span> {info?.data[0]?.description}
                </p>
                <p>
                  <span>NASA id:</span> {info?.data[0]?.nasa_id}
                </p>
                <p>
                  <span>Created date:</span> {info?.data[0]?.date_created}
                </p>
              </section>
            </div>
          )
        )
      })}
      <NavLink to={`/Planets/`}>
        <Button
          className={btnStyle.dayImgBtn}
          style={{ width: '10rem', marginLeft: '4rem', marginTop: '4rem' }}
        >
          Back to planets
        </Button>
      </NavLink>
    </>
  )
}

export default SelectedPlanet

/*
 
 4) como cambiar color a navbar de la seleccion en la que este
 6) en mars rovers si no hay informacion a devolver que salga un mensaje que diga que intente otra fecha u otra camara,
 7) en componente planet en el buscador si busca informacion pero no hay que diga que intente con otra palabra.
 8)responsive

*/
