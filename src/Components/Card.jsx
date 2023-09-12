import React from 'react'
import Image from './carousel/Image'

const Card = ({
  classNameImg,
  className,
  src,
  title,
  text,
  children,
  onCardClick,
}) => {
  function handleClick() {
    title && onCardClick && onCardClick(title)
  }

  return (
    <>
      <div className={` ${className} card`} onClick={handleClick}>
        <Image src={src} className={classNameImg} alt='' />
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
