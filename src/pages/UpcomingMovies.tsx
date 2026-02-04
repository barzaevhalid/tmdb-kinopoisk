import React from "react";
import { useGetUpcomingMoviesQuery } from "../redux/moviesApi";
import { Box, Skeleton, Typography, Stack, Pagination } from "@mui/material";
import CustomCard from "../components/Card";
import { usePageParam } from "../hooks/usePageParams";
import MoviesGrid from "../components/MoviesGrid";
import CustomPagination from "../components/CustomPagination";

export default function UpcomingMovies() {
  const { page, setPage } = usePageParam();
  const { data, isLoading, isFetching } = useGetUpcomingMoviesQuery(page);
  return (
    <>
      <MoviesGrid
        isLoading={isLoading}
        movies={data?.results ?? []}
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
          page={page}
          setPage={setPage}
          total_pages={data?.total_pages}
        />
      </Box>
    </>
  );
}
