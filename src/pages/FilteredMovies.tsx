import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Pagination,
  Select,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  useGetAllGenresQuery,
  useGetSortedMoviesQuery,
} from "../redux/moviesApi";
import MoviesGrid from "../components/MoviesGrid";
import { useDebounce } from "../hooks/useDebounce";
import CustomPagination from "../components/CustomPagination";

const initialFilters = {
  genres: [] as number[],
  rating: [0, 10],
  sort: "popularity.desc",
};

export default function FilteredMovies() {
  const allGenres = useGetAllGenresQuery();

  const [rating, setRating] = useState<number[]>([0, 10.0]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [sort, setSort] = useState("popularity.desc");

  const [page, setPage] = useState(1);

  const debouncedFilters = useDebounce({ selectedGenres, rating, sort, page });
  const sortedMovies = useGetSortedMoviesQuery(debouncedFilters);

  const toggleGenre = (genreId: number) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };
  const resetFilters = () => {
    setSelectedGenres(initialFilters.genres);
    setRating(initialFilters.rating);
    setSort(initialFilters.sort);
  };
  return (
    <Box component="section" sx={{ paddingBlock: "24px" }}>
      <Box
        sx={{
          display: "flex ",
          gap: "24px",
        }}
      >
        <Box>
          <Box
            component="aside"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "300px",
              padding: "24px",
              bgcolor: "background.paper",
              borderRadius: "12px",
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: "24px", fontWeight: "600" }}
            >
              Filters / Sort
            </Typography>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                sort by
              </InputLabel>
              <NativeSelect
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                inputProps={{
                  name: "sort",
                  id: "uncontrolled-native",
                }}
              >
                <option value="popularity.desc">Popularity ↓</option>
                <option value="popularity.asc">Popularity ↑</option>
                <option value="vote_average.desc">Rating ↓</option>
                <option value="vote_average.asc">Rating ↑</option>
                <option value="primary_release_date.desc">
                  Release Date ↓
                </option>
                <option value="primary_release_date.asc">Release Date ↑</option>
                <option value="title.asc">Title A-Z</option>
                <option value="title.desc">Title Z-A</option>
              </NativeSelect>
            </FormControl>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 600 }}>Rating</Typography>
                <Box>
                  {rating[0].toFixed(1)} - {rating[1].toFixed(1)}
                </Box>
              </Box>
              <Slider
                size="small"
                value={rating}
                onChange={(_, v) => setRating(v)}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => v.toFixed(1)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              {allGenres.data?.genres?.length ? (
                allGenres.data.genres.map((genre) => (
                  <Button
                    key={genre.id}
                    variant={
                      selectedGenres.includes(genre.id)
                        ? "contained"
                        : "outlined"
                    }
                    size="small"
                    sx={{ fontSize: "12px" }}
                    onClick={() => toggleGenre(genre.id)}
                  >
                    {genre.name}
                  </Button>
                ))
              ) : (
                <div>1</div>
              )}

              <Button size="small" sx={{ fontSize: "12px" }}>
                Action
              </Button>
              <Button size="small" sx={{ fontSize: "12px" }}>
                Action
              </Button>
            </Box>
            <Button
              onClick={resetFilters}
              variant="contained"
              sx={{
                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              Reset filters
            </Button>
          </Box>
        </Box>
        <Box>
          <MoviesGrid
            isLoading={false}
            movies={sortedMovies.data?.results ?? []}
            columns={5}
          />
          <Box
            sx={{
              marginBlock: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomPagination
              setPage={setPage}
              total_pages={sortedMovies.data?.total_pages}
              page={page}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
