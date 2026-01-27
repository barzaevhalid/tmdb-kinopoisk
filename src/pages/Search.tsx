import { Box, Button, TextField, Typography } from "@mui/material";

export default function Search() {
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
        <Button variant="contained" color="primary">
          search
        </Button>
      </Box>
      <Typography component="p" sx={{ color: "gray" }}>
        Enter a movie title to start searching.
      </Typography>
    </Box>
  );
}
