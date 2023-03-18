import React from "react";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d5bda054bemsh8637d59953d5500p177217jsnd2ceea8f53f4",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};
const Api = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
      .then((res) => res.json())
      .then((res) => setMovies(res));
  }, []);
  return (
    <div>
      {" "}
      {movies.map((movie) => {
        return <p>{movie.title}</p>;
      })}
    </div>
  );
};
export default Api;
