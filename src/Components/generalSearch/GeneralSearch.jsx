import React, { useEffect, useState } from 'react'
import { topicToSearch } from 'NavBar.jsx'

const GeneralSearch = () => {
  let [info, setInfo] = useState({})

  let url = `https://images-api.nasa.gov/search?q=${topicToSearch}`

  console.log(topicToSearch)
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data))
  }, [url])

  return <>{!topicToSearch === '' && <div>{JSON.stringify(info)}</div>}</>
}

export default GeneralSearch
