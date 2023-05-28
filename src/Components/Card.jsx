import React from 'react'
import Image from './carousel/Image'

const Card = ({ clasName, src, title, text, children }) => {
  return (
    <>
      <div className='card m-4' style={{ width: '18rem' }}>
        <Image src={src} className={clasName} alt='' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{text}</p>
          <p>{children}</p>
        </div>
      </div>
    </>
  )
}

export default Card
