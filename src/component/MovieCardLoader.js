import React from "react";

const MovieCardLoader = () => {
  return (
    <div className="border-2 p-4 m-3 w-56 max-w-fit bg-white">
      <div className="w-48 h-80 bg-gray-300 rounded-tl-2xl rounded-br-2xl relative animate-pulse">
        <div className="bg-gray-400 text-white inline-flex rounded-full items-center justify-center w-10 h-10 absolute -bottom-5 left-2 animate-pulse">
          %
        </div>
      </div>
      <div className="mt-8">
        <div className="h-5 bg-gray-300 mb-2 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-300 mr-4 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default MovieCardLoader;
