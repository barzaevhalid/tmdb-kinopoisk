import React from "react";
import { useGetNowPlayingMoviesQuery } from "../redux/moviesApi";
import { Box, Skeleton, Typography, Stack, Pagination } from "@mui/material";
import CustomCard from "../components/Card";
import CustomPagination from "../components/CustomPagination";
import MoviesGrid from "../components/MoviesGrid";
import { usePageParam } from "../hooks/usePageParams";

export default function NowPlayingMovies() {
  const { page, setPage } = usePageParam();
  const { data, isLoading, isFetching } = useGetNowPlayingMoviesQuery(page);
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
