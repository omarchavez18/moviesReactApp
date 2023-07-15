import React, { useState } from 'react'
import Image from './Image'
import Button from '../NavBar/Button'

function Carousel({
  slides,
  classNameCarouselBody,
  classNameImg,
  sectionTitleDescription,
}) {
  const [actualSlide, setActualSlide] = useState(0)

  function nextSlide() {
    setActualSlide(() => {
      return actualSlide === 99 ? 0 : actualSlide + 1
    })
  }

  function previousSlide() {
    setActualSlide(() => {
      return actualSlide === 0 ? slides.length - 1 : actualSlide - 1
    })
  }
  return (
    <>
      <div
        id='carouselExampleIndicators'
        className={`carousel slide ${classNameCarouselBody}`}
      >
        <div className='carousel-inner'>
          {slides.map((slide, i) => {
            return (
              <div
                key={i}
                className={`carousel-item  ${slide === slides[0] && 'active'}`}
              >
                {<Image src={slide?.href} className={classNameImg} alt='...' />}
              </div>
            )
          })}
        </div>

        <Button
          onClick={previousSlide}
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </Button>

        <Button
          onClick={nextSlide}
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </Button>
      </div>

      <section className={sectionTitleDescription}>
        {/* title */}
        {slides ? (
          <div>
            {}
            <h2>{slides[actualSlide]?.title}</h2>
          </div>
        ) : (
          ''
        )}

        {/* description */}
        {slides ? (
          <div>
            <p>{slides[actualSlide]?.description}</p>
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

export default Carousel
