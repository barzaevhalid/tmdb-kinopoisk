import { useGetPopularMoviesQuery } from "../redux/moviesApi";
import { Box } from "@mui/material";

import CustomPagination from "../components/CustomPagination";
import MoviesGrid from "../components/MoviesGrid";
import { usePageParam } from "../hooks/usePageParams";

export default function PopularMovies() {
  const { page, setPage } = usePageParam();
  console.log(page);

  const { data, isLoading } = useGetPopularMoviesQuery(page);

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
          total_pages={data?.total_pages || 1}
          page={page}
        />
      </Box>
    </>
  );
}
