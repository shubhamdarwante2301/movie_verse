import React, { useState, useEffect } from "react";

import useFetch from "../utility/useFetch";
import { API_URLS } from "../utility/constants";
import MovieCard from "../component/MovieCard";

const Search = () => {
  const [query, setQuery] = useState("avenger");
  const [movies, setMovies] = useState([]);

  const url = API_URLS.search(query);
  const movie = useFetch(url);
  useEffect(() => {
    setMovies(movie);
  }, [movie]);

  const getQuery = (e) => {
    if (e.key === "Enter") {
      // console.log(e.target.value)
      setQuery(e.target.value);
    }
  };

  return (
    <div className="pt-4">
      <div className="flex justify-center">
        <input
          type="text"
          onKeyUp={(e) => getQuery(e)}
          placeholder="Search Movie..."
          className="p-1 max-w-xl w-3/5 text-sm md:text-xl"
        />
        <button className="border border-black px-4 text-white">Search</button>
      </div>
      <div className="flex justify-center flex-wrap">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Search;
