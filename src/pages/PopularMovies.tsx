import { useGetPopularMoviesQuery } from "../redux/moviesApi";
import {
  Box,
  Stack,
  Pagination,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomCard from "../components/Card";
import { useState } from "react";
import CustomPagination from "../components/CustomPagination";
import MoviesGrid from "../components/MoviesGrid";
import { usePageParam } from "../hooks/usePageParams";

export default function PopularMovies() {
  const { page, setPage } = usePageParam();
  console.log(page);

  const { data, isLoading, isFetching } = useGetPopularMoviesQuery(page);

  return (
    <>
      <MoviesGrid
        movies={data?.results || []}
        isLoading={isLoading}
        columns={5}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <CustomPagination
          setPage={setPage}
          total_pages={data?.total_pages}
          page={page}
        />
      </Box>
    </>
  );
}
