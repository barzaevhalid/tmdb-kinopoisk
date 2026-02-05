import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box, LinearProgress } from "@mui/material";
import { useAppSelector, type RootState } from "../redux/store";

export default function Layout() {
  const isGlobalLoading = useAppSelector((state: RootState) =>
    Object.values(state.moviesApi.queries).some(
      (query) => query?.status === "pending",
    ),
  );

  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Header />
        <Box sx={{ height: "4px", width: "100%", position: "relative" }}>
          {isGlobalLoading && (
            <LinearProgress
              sx={{
                position: "absolute",
                width: "100%",
                backgroundColor: "transparent",
                "& .MuiLinearProgress-bar": { backgroundColor: "#2563eb" },
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            width: "1240px",
            mx: "auto",
            flex: 1,
            bgcolor: "background.paper",
            padding: "0 20px",
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
