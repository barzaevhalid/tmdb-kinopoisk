import { Box, Button, TextField, Typography } from "@mui/material";
import CustomCard from "../components/Card";

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
      <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "600" }}>
        Results for "avatar"
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "24px",
        }}
      >
        {/* <Typography component="p" sx={{ color: "gray" }}>
          Enter a movie title to start searching.
        </Typography> */}
        {Array(10)
          .fill(null)
          .map(() => (
            <CustomCard />
          ))}
      </Box>
    </Box>
  );
}
