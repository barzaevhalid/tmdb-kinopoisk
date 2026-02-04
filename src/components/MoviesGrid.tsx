import type { MovieDto, MoviesResponseDto } from "../redux/movies.dto";
import { Box, Skeleton, Typography } from "@mui/material";
import CustomCard from "./Card";

interface Props {
  isLoading: boolean;
  movies: MovieDto[];
  limit?: number;
  columns?: number;
}

export default function MoviesGrid({
  isLoading,
  movies,
  limit,
  columns = 6,
}: Props) {
  const visibleMovies = limit ? movies.slice(0, limit) : movies;

  return (
    <Box
      sx={{
        pt: 3,
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: 3,
      }}
    >
      {isLoading &&
        Array.from({ length: limit ?? columns }).map((_, i) => (
          <Box key={i}>
            <Skeleton variant="rectangular" width={210} height={170} />
          </Box>
        ))}

      {!isLoading && !movies.length && <Typography>Нет данных</Typography>}

      {!isLoading &&
        visibleMovies.map((movie) => (
          <CustomCard key={movie.id} movie={movie} />
        ))}
    </Box>
  );
}
