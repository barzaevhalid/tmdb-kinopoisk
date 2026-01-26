import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import CategoryMovies from "./pages/CategoryMovies";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import FilteredMovies from "./pages/FilteredMovies";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoryMovies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/filtered" element={<FilteredMovies />} />
      </Route>
    </Routes>
  );
}
