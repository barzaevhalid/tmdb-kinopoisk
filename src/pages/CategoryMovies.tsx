import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function CategoryMovies() {
  return (
    <Box component="section" sx={{ paddingTop: "24px" }}>
      <Box
        sx={{
          marigin: "0, auto",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <Button
          component={Link}
          to="#"
          sx={{
            color: "primary.contrastText",
          }}
        >
          Popular Movies
        </Button>
        <Button
          component={Link}
          to="#"
          sx={{
            color: "primary.contrastText",
          }}
        >
          Top Rated Movies
        </Button>
        <Button
          component={Link}
          to="#"
          sx={{
            color: "primary.contrastText",
          }}
        >
          Upcoming Movies
        </Button>
        <Button color="primary" component={Link} to="#">
          Now Playing Movies
        </Button>
      </Box>
      <Box
        sx={{
          paddingBottom: "40px",
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
          <Link to="#">
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
        <Box
          sx={{
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {Array(10)
            .fill(null)
            .map(() => (
              <Box sx={{ marginBottom: "20px" }}>
                <Card
                  sx={{
                    width: "180px",
                    height: "280px",
                    position: "relative",
                    cursor: "pointer",
                    overflow: "hidden",
                    "&:hover .icon": {
                      transform: "translateY(0) scale(1)",
                      opacity: 1,
                    },
                    marginBottom: "10px",
                  }}
                >
                  <IconButton
                    className="icon"
                    sx={{
                      backgroundColor: "rgba(0,0,0,0.5)",
                      position: "absolute",
                      top: 10,
                      right: 10,
                      transform: "translateY(-20px) scale(0.95)",
                      opacity: 0,
                      transition: "transform 0.4s ease, opacity 0.4s ease",
                      color: "#fff",
                      zIndex: 10,
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <CardMedia
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    component="img"
                    alt="green iguana"
                    image="https://image.tmdb.org/t/p/w185/5bxrxnRaxZooBAxgUVBZ13dpzC7.jpg"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#16a34a",
                      borderRadius: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    9.0
                  </Box>
                </Card>
                <Link to="">The rip</Link>
              </Box>
            ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Stack spacing={1}>
          <Pagination color="primary" count={10} page={5} />
        </Stack>
      </Box>
    </Box>
  );
}
