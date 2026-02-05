import { createTheme } from "@mui/material";
import type { ThemeOptions, Theme } from "@mui/material/styles";

const lightPalette: ThemeOptions["palette"] = {
  mode: "light",
  primary: {
    main: "#1976d2",
    contrastText: "#000",
  },

  background: {
    default: "#fff",
    paper: "#fff",
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
    paper: "#141c2c",
  },
};

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            borderRadius: "100px",
            border: "1px solid #848da439",
            fontWeight: 600,
            transition: "background-color .2s ease, color .2s ease",

            color: "#fff",
          },
          outlinedPrimary: ({ theme }: { theme: Theme }) => ({
            color: theme.palette.primary.contrastText,
          }),
        },
      },
    },
  });
