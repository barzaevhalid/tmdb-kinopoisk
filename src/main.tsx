import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { getTheme } from "./theme/theme.ts";
import { Provider } from "react-redux";
import { store, useAppSelector } from "./redux/store.ts";

function Root() {
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
);
