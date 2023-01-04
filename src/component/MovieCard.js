import React from "react";

const MovieCard = (props) => {
  const {title, name, poster_path, release_date, first_air_date, vote_average} = props.movie
  const poster = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
  const rating = Math.floor((vote_average * 100) / 10)
  
  return (
    <div className="p-4 m-3 w-56 max-w-fit rounded bg-primary-400 border-2 border-[#de5801]">
      <div className="w-48 relative">
        <img src={poster} alt="" className="border-2 border-[#de5801] rounded-tl-2xl rounded-br-2xl"/>
        <div className="bg-[#A05E29] text-white inline-flex rounded-full items-center justify-center w-10 h-10 absolute -bottom-5 left-2">
          {rating}<span className="text-xs">%</span>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="font-bold text-[#de5801]">{title || name}</h3>
        <h3 className="text-gray-400">{release_date || first_air_date}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
