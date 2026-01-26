import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
        boxShadow: "0px -1px 1px 0px rgba(191,191,191,0.75)",
        padding: "16px 25px",
        background: theme.palette.background.paper,
      })}
    >
      © 2025 Kinopoisk Demo · Data courtesy of TMDB.
    </Box>
  );
}
