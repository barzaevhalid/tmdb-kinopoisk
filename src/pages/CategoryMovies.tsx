import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CategoryMovies() {
  return (
    <Box component="section">
      <Box>
        <Button component={Link} to="#">
          Popular Movies
        </Button>
      </Box>
    </Box>
  );
}
