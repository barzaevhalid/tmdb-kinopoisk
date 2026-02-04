import { Box, Button, TextField, Typography } from "@mui/material";

import MoviesGrid from "../components/MoviesGrid";
import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { useState } from "react";

import { useGetMovieQuery } from "../redux/moviesApi";

export default function Search() {
  const queryFromStore = useSelector((state: RootState) => state.search.query);

  const [inputValue, setInputValue] = useState(queryFromStore);
  const [requestQuery, setRequestQuery] = useState(queryFromStore);

  const movies = useGetMovieQuery(requestQuery, {
    skip: !requestQuery,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setRequestQuery(inputValue);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        paddingBlock: "32px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "28px",
          fontWeight: 600,
        }}
      >
        Search Results
      </Typography>
      <Box
        onSubmit={handleSearch}
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "600px",
          paddingRight: "10px",
          gap: "20px",
        }}
      >
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
          color="primary"
          type="submit"
          disabled={!inputValue}
        >
          search
        </Button>
      </Box>
      <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "600" }}>
        Results for "avatar"
      </Typography>

      <MoviesGrid
        movies={movies.data?.results ?? []}
        isLoading={movies.isLoading}
        columns={5}
      />
    </Box>
  );
}
