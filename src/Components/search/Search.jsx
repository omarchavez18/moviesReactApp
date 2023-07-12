import React, { useContext, useEffect, useState } from 'react'

import { Container } from '../App'

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

  return (
    <>
      {fetchInfo ? (
        <p>{fetchInfo?.collection?.items[0]?.data[0]?.title}</p>
      ) : (
        ''
      )}
      {fetchInfo ? (
        <p>{fetchInfo?.collection?.items[0]?.data[0]?.description}</p>
      ) : (
        ''
      )}
      {fetchInfo ? (
        <img
          src={fetchInfo?.collection?.items[0]?.links[0]?.href}
          alt='images'
        />
      ) : (
        ''
      )}
    </>
  )
}

export default Search
