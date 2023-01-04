import {useState, useEffect} from "react";
import MovieCard from './MovieCard'

import useFetch from '../utility/useFetch'
import {API_URLS} from '../utility/constants'
import DropDown from "./DropDown";

const Popular = () => {
  const[movies, setMovies] = useState([])
  const[query, setQuery] = useState('movie')

  const url = API_URLS.popular(query)
  const movie = useFetch(url)

  useEffect(()=>{
    setMovies(movie)
    // console.log("after",movies);
  },[movie])

  
  const toggleSection = (e) => {
    let sectionInput = e.target.value;
    if(sectionInput === "Movie") {
      setQuery("movie");
    } else {
      setQuery("tv");
    }
  }

  let arr = ["Movie","TV Shows"];

  return (
    <div className="my-5">
      <div className="flex">
        <h2 className="md:text-xl font-semibold text-white">What's Popular</h2>
        <DropDown items={arr} toggleSection={toggleSection}/>
      </div>
      <div className="flex overflow-x-auto">
        {
          movies.map((movie, index)=>{
            return <MovieCard movie={movie} key={index}/>
          })
        }
      </div>
    </div>
  );
};

export default Popular;
