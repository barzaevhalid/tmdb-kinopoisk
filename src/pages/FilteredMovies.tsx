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
import CustomCard from "../components/Card";

export default function FilteredMovies() {
  const [value, setValue] = useState<number[]>([0, 10.0]);
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
                defaultValue={"Popularity"}
                inputProps={{
                  name: "sort",
                  id: "uncontrolled-native",
                }}
              >
                <option value="PopularityDesc">Popularity ↓</option>
                <option value="PopularityAsc">Popularity ↑</option>
                <option value="RatingDesc">Rating ↓</option>
                <option value="RatingAsc">Rating ↑</option>
                <option value="ReleaseDesc">Release Date ↓</option>
                <option value="ReleaseAsc">Release Date ↑</option>
                <option value="TitleAZ">Title A-Z</option>
                <option value="TitleZA">Title Z-A</option>
              </NativeSelect>
            </FormControl>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 600 }}>Rating</Typography>
                <Box>
                  {value[0].toFixed(1)} - {value[1].toFixed(1)}
                </Box>
              </Box>
              <Slider
                size="small"
                value={value}
                onChange={(_, v) => setValue(v)}
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
              <Button
                size="small"
                sx={{
                  fontSize: "12px",
                }}
              >
                Action
              </Button>
              <Button size="small" sx={{ fontSize: "12px" }}>
                Action
              </Button>
              <Button size="small" sx={{ fontSize: "12px" }}>
                Action
              </Button>
              <Button size="small" sx={{ fontSize: "12px" }}>
                Action
              </Button>
            </Box>
            <Button
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "24px",
            }}
          >
            {/* {Array(10)
              .fill(null)
              .map(() => (
                <CustomCard />
              ))} */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
              marginTop: "24px",
            }}
          >
            <Stack spacing={1}>
              <Pagination color="primary" count={10} page={5} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
