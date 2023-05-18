import React from 'react'
import { useEffect, useState } from 'react'
import Image from '../carousel/Image'

const DayImg = () => {
  const [data, setData] = useState([])
  const [searchDate, setSearchDate] = useState('')

  const ApiKey = 'KJLC8xavAOn0VCZNxMNvNQYRUnpArbRZs25D3HZu'
  const Api = `https://api.nasa.gov/planetary/apod?date=${searchDate}&api_key=${ApiKey}`

  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error.message)
      })
  }, [Api])

  return (
    <>
      <h2>Image of the day</h2>
      <h3>Search the Image of the day with date:</h3>

      <form
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <input
          type='text'
          name='search'
          autoComplete='off'
          placeholder='Example: 2010-10-01'
          value={searchDate}
          onChange={(event) => setSearchDate(event.target.value)}
        ></input>
        <button type='submit'>Search</button>
      </form>
      <p>SearchDate: {searchDate}</p>

      <Image src={data.url}></Image>
      <p>{data.title}</p>
      <p>Images Credit & Copyright: {data.copyright}</p>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
    </>
  )
}

// const DayImg = () => {
//   const ApiKey = 'KJLC8xavAOn0VCZNxMNvNQYRUnpArbRZs25D3HZu'
//   const Api = `https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`

//   const [title, setTitle] = useState('')
//   const [imageUrl, setImageUrl] = useState()
//   const [copyright, setCopyright] = useState('')
//   const [explanation, setExplanation] = useState('')
//   const [date, setDate] = useState('')

//   useEffect(() => {
//     fetch(Api)
//       .then((res) => {
//         console.log(res)
//         return res.json()
//       })
//       .then((data) => {
//         setTitle(data.title)
//         setImageUrl(data.url)
//         setCopyright(data.copyright)
//         setExplanation(data.explanation)
//         setDate(data.date)
//       })
//       .catch((error) => {
//         console.log(error)
//         console.log(error.message)
//       })
//   }, [])

//   return (
//     <>
//       <h2>Image of the day</h2>
//       <Image src={imageUrl}></Image>
//       <p>{title}</p>
//       <p>{`Images Credit & Copyright: ${copyright}`}</p>
//       <p>{date}</p>
//       <p>{explanation}</p>
//     </>
//   )
// }

export default DayImg
