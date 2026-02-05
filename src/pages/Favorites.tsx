import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MoviesGrid from "../components/MoviesGrid";
import { useAppSelector } from "../redux/store";

export default function Favorites() {
  const movies = useAppSelector((state) => state.favorites.items);

  return (
    <Box sx={{ padding: "32px" }}>
      <Typography
        variant="h2"
        sx={{ fontSize: "28px", fontWeight: 600, mb: 4 }}
      >
        My Favorites
      </Typography>

      {movies.length > 0 ? (
        <MoviesGrid isLoading={false} movies={movies} />
      ) : (
        <Typography>You haven't added any movies to favorites yet.</Typography>
      )}
    </Box>
  );
}
