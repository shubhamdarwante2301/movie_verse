import React, { useState } from "react";
import { Link } from "react-router-dom";

const TempNavbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  return (
    <div className="sticky top-0 left-0 z-20 w-full sm:border-b-4">
      <div className="flex sm:flex-row flex-col bg-primary-200 text-white p-1 relative">
        <div className="p-3 text-2xl cursor-pointer sm:border-none border-b-2 border-slate-300">
          <Link to="/movie_verse">Movie Verse</Link>
        </div>
        <div
          onClick={toggleNavbar}
          className="w-6 cursor-pointer absolute right-5 top-4 sm:hidden"
        >
          <div className="bg-white w-full h-1 my-1 rounded"></div>
          <div className="bg-white w-full h-1 my-1 rounded"></div>
          <div className="bg-white w-full h-1 my-1 rounded"></div>
        </div>
        <div className={`${toggle ? "block" : "hidden"} sm:block`}>
          <ul className="flex text-center sm:flex-row flex-col p-2 text-md">
            <li className="p-2 cursor-pointer sm:border-none hover:bg-primary-400 border-b-2 border-slate-200 rounded-md">
              <Link to="/popular">Popular</Link>
            </li>
            <li className="p-2 cursor-pointer sm:border-none hover:bg-primary-400 border-b-2 border-slate-200 rounded-md">
              <Link to="/trending">Trending</Link>
            </li>
            <li className="p-2 cursor-pointer sm:border-none hover:bg-primary-400 border-b-2 border-slate-200 rounded-md">
              <Link to="/search">Search...</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TempNavbar;
