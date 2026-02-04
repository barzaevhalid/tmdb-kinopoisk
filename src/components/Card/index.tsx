import { IconButton, CardMedia, Box, Card, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { MovieDto } from "../../redux/movies.dto";
import { Link } from "react-router-dom";
interface Props {
  movie: MovieDto;
}
export default function CustomCard({ movie }: Props) {
  const movieImg = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <Box component={Link} to={`/movie/${movie.id}`} sx={{ width: "100%" }}>
      <Card
        sx={{
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
            transform: "translateY(-20px) scale(0.95)", // начальное состояние: чуть выше и меньше
            opacity: 0, // начально прозрачная
            transition: "transform 0.4s ease, opacity 0.4s ease", // плавность
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
            height: "270px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          component="img"
          alt="green iguana"
          image={movieImg}
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
          {movie.vote_average.toFixed(1)}
        </Box>
      </Card>
      <Typography>{movie.title}</Typography>
    </Box>
  );
}
