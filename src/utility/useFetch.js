import axios from 'axios'
import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const[movies, setMovies] = useState([])

    const getMovies = (url) => {
        axios.get(url)
        .then((response)=>{
            setMovies(response.data.results)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    useEffect(()=>{
        getMovies(url);
    },[url])

    return movies
}

export default useFetch
