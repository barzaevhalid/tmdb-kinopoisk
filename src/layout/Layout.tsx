import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function Layout() {
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
