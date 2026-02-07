import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCreditsByMovieIdQuery,
  useGetMovieByIdQuery,
  useGetSimilarMoviesByIdQuery,
} from "../redux/moviesApi";
import CustomCard from "../components/Card";

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isFetching } = useGetMovieByIdQuery(Number(id));
  const credits = useGetCreditsByMovieIdQuery(Number(id));
  const similar = useGetSimilarMoviesByIdQuery(Number(id));
  const navigate = useNavigate();

  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          paddingBlock: "24px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "280px minmax(0,1fr)",
            gap: "32px",
          }}
        >
          {isFetching ? (
            <Skeleton variant="rectangular" width={280} height={420} />
          ) : data?.poster_path ? (
            <Box
              sx={(theme) => ({
                borderRadius: "10px",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0px 0px 10px 0px rgba(255,255,255,0.75)"
                    : "",
              })}
              component="img"
              src={`http://image.tmdb.org/t/p/w342/${data?.poster_path}`}
            />
          ) : (
            <Box
              sx={{
                width: 280,
                height: 420,
                borderRadius: "10px",
                bgcolor: "grey.800",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              Нет данных
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Box
              component="header"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "36px",
                    fontWeight: "700",
                  }}
                >
                  {isLoading ? (
                    <Skeleton width={200} />
                  ) : (
                    data?.title || "Нет названия"
                  )}
                </Typography>
                <Button variant="outlined" onClick={() => navigate(-1)}>
                  Back
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Typography>
                  Release year:{" "}
                  {isLoading ? (
                    <Skeleton width={400} />
                  ) : (
                    data?.release_date || "Нет данных"
                  )}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#16a34a",
                    borderRadius: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  6.7
                </Box>
                <Typography>
                  Runtime:
                  {data?.runtime
                    ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
                    : "N/A"}
                </Typography>
              </Box>
            </Box>
            <Typography component="p">
              {isLoading ? (
                <Skeleton width={400} />
              ) : (
                data?.overview || "Нет описания"
              )}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Genres
              </Typography>
              {isLoading ? (
                <Skeleton width={200} height={50} />
              ) : data?.genres?.length ? (
                <List
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  {data.genres.map((genre) => (
                    <ListItem
                      key={genre.id}
                      sx={{
                        bgcolor: "background.paper",
                        width: "auto",
                        borderRadius: "100px",
                      }}
                    >
                      {genre.name}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <ListItem
                  sx={{
                    bgcolor: "background.paper",
                    width: "auto",
                    borderRadius: "100px",
                  }}
                >
                  Нет жанра
                </ListItem>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "36px",
              fontWeight: "600",
            }}
          >
            Cast
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Box
                    key={i}
                    component="article"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "160px",
                        height: "160px",
                      }}
                    />
                    <Box>
                      <Typography
                        component="p"
                        sx={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        Gerar Butler
                      </Typography>
                      <Typography
                        component="p"
                        sx={{ color: "gray", fontSize: "14px" }}
                      >
                        John Garrity
                      </Typography>
                    </Box>
                  </Box>
                ))
              : credits.data?.cast.length
                ? credits.data.cast.slice(0, 6).map((credit) => (
                    <Box
                      key={credit.id}
                      component="article"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        src={`http://image.tmdb.org/t/p/w342/${credit.profile_path}`}
                        sx={{
                          width: "160px",
                          height: "160px",
                        }}
                      />
                      <Box>
                        <Typography
                          component="p"
                          sx={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          {credit.name}
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ color: "gray", fontSize: "14px" }}
                        ></Typography>
                      </Box>
                    </Box>
                  ))
                : //добавить скилетоны
                  "нет данных"}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Similar movies
          </Typography>
          {isLoading ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "24px",
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} width={200} height={200} />
              ))}
            </Box>
          ) : similar.data?.results?.length ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "24px",
              }}
            >
              {similar.data.results.slice(0, 6).map((movie) => (
                <CustomCard key={movie.id} movie={movie} />
              ))}
            </Box>
          ) : (
            <Typography
              variant="h2"
              sx={{
                fontSize: "34px",
                fontWeight: "600",
              }}
            >
              There are no similar movies
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
