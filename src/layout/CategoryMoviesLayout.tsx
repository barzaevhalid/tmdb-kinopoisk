import { Box, Button } from "@mui/material";

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function CategoryMoviesLayout() {
  const location = useLocation();

  const links = [
    { to: "popular", label: "Popular" },
    { to: "top-rated", label: "Top Rated" },
    { to: "upcoming", label: "Upcoming" },
    { to: "now-playing", label: "Now Playing" },
  ];
  return (
    <Box
      sx={{
        paddingBlock: "24px",
      }}
    >
      <Box
        sx={{
          margin: "0, auto",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {links.map((link) => {
          const isActive = location.pathname.endsWith(link.to);
          return (
            <Button
              key={link.to}
              variant={isActive ? "contained" : "outlined"}
              component={NavLink}
              to={link.to}
              sx={{
                color: "primary.contrastText",
              }}
            >
              {link.label}
            </Button>
          );
        })}
      </Box>
      <Outlet />
    </Box>
  );
}
