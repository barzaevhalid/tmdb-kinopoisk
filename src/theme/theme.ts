import { createTheme } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";

const lightPalette: ThemeOptions["palette"] = {
  mode: "light",
  primary: {
    main: "#1976d2",
    contrastText: "#000",
  },
  background: {
    default: "#fff",
    paper: "#cacfd92a",
  },
};

const darkPalette: ThemeOptions["palette"] = {
  mode: "dark",
  primary: {
    main: "#1976d2",
    contrastText: "#fff",
  },

  background: {
    default: "#0b1120",
  },
};

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    shape: {
      borderRadius: 10,
    },
  });
