import React, { useContext, useEffect, useState } from 'react'

import { Container } from '../App'
import Carousel from '../carousel/Carousel'
import styles from './../../Styles/carousel/carousel.module.scss'
import searchStyles from './../../Styles/search/search.module.scss'
import stylesimg from '../../Styles/dayImage/searchImg.module.scss'
const Search = () => {
  const [fetchInfo, setFetchInfo] = useState('')

  const { topicToSearch } = useContext(Container)

  const apiUrl = `https://images-api.nasa.gov/search?q=${topicToSearch}&description=${topicToSearch}&media_type=image`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setFetchInfo(data)
      })
  }, [apiUrl])

  function getInfo(fetchInfo) {
    let result = []
    fetchInfo?.collection?.items?.map((info) => {
      return result.push({
        title: info?.data[0]?.title,
        href: info?.links[0]?.href,
        description: info?.data[0]?.description,
      })
    })
    return result
  }
  getInfo(fetchInfo)

  return (
    <>
      {fetchInfo?.collection?.items.length === 0 ? (
        <section className={stylesimg.diverror}>
          <div className={stylesimg.tryanotherdate}>
            <p>there´s no result, try another thing</p>
          </div>
        </section>
      ) : (
        <div className={searchStyles.containerCarousel}>
          {/* carousel */}
          <Carousel
            slides={getInfo(fetchInfo)}
            classNameCarouselBody={styles.carouselBody}
            classNameImg={styles.img}
            sectionTitleDescription={searchStyles.sectionTitleDescription}
          />
        </div>
      )}
    </>
  )
}

export default Search
