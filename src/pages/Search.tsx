import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import MoviesGrid from "../components/MoviesGrid";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../redux/store";
import { useState } from "react";

import { useGetMovieQuery } from "../redux/moviesApi";
import { setSearchQuery } from "../redux/searchSlice";

export default function Search() {
  const queryFromStore = useSelector((state: RootState) => state.search.query);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(queryFromStore);
  const [requestQuery, setRequestQuery] = useState(queryFromStore);

  const { data, isLoading } = useGetMovieQuery(requestQuery, {
    skip: !requestQuery,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setRequestQuery(inputValue);
    }
  };

  const resetInput = () => {
    setInputValue("");
    setRequestQuery("");
    dispatch(setSearchQuery(""));
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
          alignItems: "center",
          gap: "16px",
          maxWidth: "700px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            maxWidth: "500px",
            border: "1px solid gray",
            borderRadius: 2,
            px: 1,
            boxShadow: "none",
          }}
        >
          <InputBase
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search movie"
            sx={{
              ml: 1,
              flex: 1,
            }}
          />

          {inputValue && (
            <IconButton
              type="button"
              size="small"
              onClick={resetInput}
              sx={{ p: "5px" }}
            >
              <ClearIcon />
            </IconButton>
          )}
        </Paper>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!inputValue.trim()}
          sx={{ height: "40px", px: 4 }}
        >
          search
        </Button>
      </Box>
      {requestQuery && (
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "600" }}>
          Results for {requestQuery}
        </Typography>
      )}
      {!requestQuery && (
        <Typography
          variant="h2"
          sx={{ fontSize: "14px", fontWeight: "600", color: "gray" }}
        >
          Enter a movie title to start searching.
        </Typography>
      )}

      {requestQuery && (
        <MoviesGrid
          movies={data?.results ?? []}
          isLoading={isLoading}
          columns={5}
        />
      )}
      {requestQuery && data?.results?.length === 0 && !isLoading && (
        <Box sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h5" color="text.secondary">
            No movies found for "{requestQuery}"
          </Typography>
        </Box>
      )}
    </Box>
  );
}
