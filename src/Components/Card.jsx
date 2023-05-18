import React from 'react'
import Image from './carousel/Image'
import Hyperlink from './NavBar/Hyperlink'

const Card = () => {
  return (
    <>
      <div className='card m-4' style={{ width: '18rem' }}>
        <Image
          src='https://viajes.nationalgeographic.com.es/medio/2018/10/30/cho-oyu_e35b898f_1500x907.jpg'
          className='card-img-top'
          alt=''
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Hyperlink href='' className='btn btn-primary mt-2'>
            star
          </Hyperlink>
        </div>
      </div>
    </>
  )
}

export default Card
