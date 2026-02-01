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

export default function PopularMovies() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetPopularMoviesQuery(page);

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
        <Stack>
          <Pagination
            onChange={(_, value) => setPage(value)}
            color="primary"
            count={data?.total_pages}
            page={page}
          />
        </Stack>
      </Box>
    </>
  );
}
