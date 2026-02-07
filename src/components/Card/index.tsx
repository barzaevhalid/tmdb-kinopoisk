import { IconButton, CardMedia, Box, Card, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { MovieDto } from "../../redux/movies.dto";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../../redux/favoriteMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
interface Props {
  movie: MovieDto;
}
export default function CustomCard({ movie }: Props) {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favorites.items.some((m: any) => m.id === movie.id),
  );

  const handleLikeClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleFavorite(movie));
  };
  const movieImg = movie.poster_path
    ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
    : "https://placehold.co/200x270?text=No+Poster";

  const ratingBgColor =
    movie.vote_average >= 7
      ? "green"
      : movie.vote_average < 5
        ? "red"
        : "orange";
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
          ".icon": {
            transform: isFavorite && "translateY(0) scale(1)",
            opacity: isFavorite && 1,
            color: isFavorite && "yellow",
          },
          marginBottom: "10px",
        }}
      >
        <IconButton
          onClick={handleLikeClick}
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
          alt={movie.title || "Movie poster"}
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
            backgroundColor: ratingBgColor,
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {movie.vote_average.toFixed(1)}
        </Box>
      </Card>
      <Typography>{movie.title || "No Title"}</Typography>
    </Box>
  );
}
