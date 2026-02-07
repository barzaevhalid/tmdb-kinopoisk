import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";

import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import FilteredMovies from "./pages/FilteredMovies";
import MovieDetail from "./pages/MovieDetail";
import CategoryMoviesLayout from "./layout/CategoryMoviesLayout";
import PopularMovies from "./pages/PopularMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import NowPlayingMovies from "./pages/NowPlayingMovies";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/filtered" element={<FilteredMovies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/categories" element={<CategoryMoviesLayout />}>
          <Route index element={<PopularMovies />} />
          <Route path="popular" element={<PopularMovies />} />
          <Route path="top-rated" element={<TopRatedMovies />} />
          <Route path="upcoming" element={<UpcomingMovies />} />
          <Route path="now-playing" element={<NowPlayingMovies />} />
        </Route>
      </Route>
    </Routes>
  );
}
