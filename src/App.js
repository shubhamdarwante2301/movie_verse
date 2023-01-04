import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Popular from './pages/Popular'
import Trending from './pages/Trending'
import Search from './pages/Search'
import PageNotFound from './pages/PageNotFound'
// import MovieCardLoader from './component/MovieCardLoader'

function App() {
  return (
    <>
      <Navbar />
      <div className="md:px-4 bg-primary-100">
        {/* <MovieCardLoader /> */}
        <Routes>
          <Route path="/movie_verse" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
