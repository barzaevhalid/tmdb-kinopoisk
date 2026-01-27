import {
  Box,
  Button,
  Typography,
  TextField,
  CardMedia,
  Card,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <Box component="section">
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100vw",
            height: "700px",
            marginLeft: "calc(50% - 50vw)",
            marginRight: "calc(50% - 50vw)",
            backgroundImage: `
      linear-gradient(to bottom, rgba(18,18,18,0) 0%, rgb(18,18,18) 80%),
      url("https://static0.srcdn.com/wordpress/wp-content/uploads/2020/05/SpongeBob-and-Patrick-Featured-Image.jpg?q=50&fit=crop&w=1600&h=900&dpr=1.5")
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              width: "1200px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: "48px",
              }}
            >
              WELCOME
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                fontSize: "24px",
              }}
            >
              Browse highlighted titles from TMDB
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "600px",
                paddingRight: "10px",
                marginTop: "20px",
                gap: "20px",
              }}
            >
              <TextField
                placeholder="Search movie"
                sx={{
                  width: "500px",
                  borderRadius: 2,
                  bgcolor: "background.default",
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
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "60px",
        }}
      >
        <Box
          sx={{
            paddingBottom: "64px",
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
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "24px",
            }}
          >
            {Array(6)
              .fill(null)
              .map(() => (
                <Box>
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
                  <Link to="">The rip</Link>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
