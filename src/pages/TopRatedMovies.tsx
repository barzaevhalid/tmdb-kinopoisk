import { Box, Skeleton, Typography, Stack, Pagination } from "@mui/material";
import React from "react";
import CustomCard from "../components/Card";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} from "../redux/moviesApi";

export default function TopRatedMovies() {
  const { data, isLoading, isFetching } = useGetTopRatedMoviesQuery();
  return (
    <>
      <Box
        sx={{
          paddingTop: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "24px",
        }}
      >
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" width={210} height={170} />
          ))
        ) : data?.results?.length ? (
          data.results.map((movie) => <CustomCard movie={movie} />)
        ) : (
          <Typography> Нет данных</Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Stack spacing={1}>
          <Pagination color="primary" count={10} page={5} />
        </Stack>
      </Box>
    </>
  );
}
