import { Box, Skeleton, Typography, Stack, Pagination } from "@mui/material";
import React, { useState } from "react";
import CustomCard from "../components/Card";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} from "../redux/moviesApi";
import MoviesGrid from "../components/MoviesGrid";
import CustomPagination from "../components/CustomPagination";
import { usePageParam } from "../hooks/usePageParams";

export default function TopRatedMovies() {
  const { page, setPage } = usePageParam();
  const { data, isLoading, isFetching } = useGetTopRatedMoviesQuery(page);

  return (
    <>
      <MoviesGrid
        movies={data?.results ?? []}
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
