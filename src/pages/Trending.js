import React, { useState, useEffect } from "react";

import MovieCard from "../component/MovieCard";
import { API_URLS } from "../utility/constants";
import useFetch from "../utility/useFetch";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const url = API_URLS.trending("day");
  const movie = useFetch(url);

  useEffect(() => {
    setMovies(movie);
    // console.log(movies);
  }, [movie]);

  return (
    <>
      <div className="p-2">
        <h1 className="text-white">Trending Movies</h1>
      </div>
      <div className="flex justify-center flex-wrap">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </>
  );
};

export default Trending;
