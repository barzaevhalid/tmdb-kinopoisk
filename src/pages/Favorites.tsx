import { Box, Typography } from "@mui/material";
import React from "react";

export default function Favorites() {
  return (
    <Box
      sx={{
        paddingBlock: "32px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          Favorites
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "24px",
          }}
        ></Box>
        <Typography component="p" sx={{ color: "gray" }}>
          Add movies to favorites to see them on this page.
        </Typography>
      </Box>
    </Box>
  );
}
