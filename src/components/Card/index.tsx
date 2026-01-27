import { IconButton, CardMedia, Box, Card } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function CustomCard() {
  return (
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
  );
}
