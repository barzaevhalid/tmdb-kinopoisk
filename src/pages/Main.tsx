import { Box, Button, Typography, TextField } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import {
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../redux/moviesApi";

import { useMemo, useState } from "react";
import MoviesGrid from "../components/MoviesGrid";
import { useAppDispatch } from "../redux/store";
import { setSearchQuery } from "../redux/searchSlice";

export default function Main() {
  const popular = useGetPopularMoviesQuery(1);
  const topRated = useGetTopRatedMoviesQuery(1);
  const upcoming = useGetUpcomingMoviesQuery(1);
  const nowPlaying = useGetNowPlayingMoviesQuery(1);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (search.trim()) {
      dispatch(setSearchQuery(search));
      navigate("/search");
    }
    dispatch(setSearchQuery(search));
  };

  const isLoading =
    popular.isLoading &&
    topRated.isLoading &&
    upcoming.isLoading &&
    nowPlaying.isLoading;

  if (popular.error) return <div>error</div>;

  const randomMovie = useMemo(() => {
    const movies = popular.data?.results ?? [];
    const randomIndex = movies.length
      ? Math.floor(Math.random() * movies.length)
      : 0;

    return movies[randomIndex];
  }, [popular.data?.results]);

  const backdrop = randomMovie?.backdrop_path;
  return (
    <>
      <Box component="section">
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100vw",
            height: "700px",
            marginLeft: "calc(50% - 50vw)",
            marginRight: "calc(50% - 50vw)",
            backgroundImage: `
      linear-gradient(to bottom, rgba(18,18,18,0) 0%, rgb(18,18,18) 80%),
      url(https://image.tmdb.org/t/p/original${backdrop})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              width: "1200px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: "48px",
              }}
            >
              WELCOME
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                fontSize: "24px",
              }}
            >
              Browse highlighted titles from TMDB
            </Typography>
            <Box
              onSubmit={handleSearch}
              component="form"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "600px",
                paddingRight: "10px",
                marginTop: "20px",
                gap: "20px",
              }}
            >
              <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movie"
                sx={{
                  width: "500px",
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                type="submit"
                disabled={!search}
                sx={{
                  color: "fff",
                  backgroundColor: "#2563eb",
                  opacity: search ? "1" : ".6",
                  "&.Mui-disabled": {
                    backgroundColor: "rgba(37, 99, 235, 0.4)",
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                  "&:hover": {
                    background: "#1d4ed8",
                  },
                }}
              >
                search
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "60px",
        }}
      >
        <Box
          sx={{
            paddingBottom: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: 24 }}>
              Popular Movies
            </Typography>
            <Link to="categories/popular">
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#5c5a5a6c",
                  color: "primary.contrastText",
                }}
              >
                View more
              </Button>
            </Link>
          </Box>

          <MoviesGrid
            isLoading={isLoading}
            movies={popular.data?.results ?? []}
            limit={6}
          />
        </Box>
        <Box
          sx={{
            paddingBottom: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: 24 }}>
              Top Rated Movies
            </Typography>
            <Link to="categories/top-rated">
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#5c5a5a6c",
                  color: "primary.contrastText",
                }}
              >
                View more
              </Button>
            </Link>
          </Box>
          <MoviesGrid
            isLoading={isLoading}
            movies={topRated.data?.results ?? []}
            limit={6}
          />
        </Box>
        <Box
          sx={{
            paddingBottom: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: 24 }}>
              Upcoming Movies
            </Typography>
            <Link to="categories/upcoming">
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#5c5a5a6c",
                  color: "primary.contrastText",
                }}
              >
                View more
              </Button>
            </Link>
          </Box>
          <MoviesGrid
            isLoading={isLoading}
            movies={upcoming.data?.results ?? []}
            limit={6}
          />
        </Box>
        <Box
          sx={{
            paddingBottom: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: 24 }}>
              Now Playing Movies
            </Typography>
            <Link to="categories/now-playing">
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#5c5a5a6c",
                  color: "primary.contrastText",
                }}
              >
                View more
              </Button>
            </Link>
          </Box>
          <MoviesGrid
            isLoading={isLoading}
            movies={nowPlaying.data?.results ?? []}
            limit={6}
          />
        </Box>
      </Box>
    </>
  );
}
