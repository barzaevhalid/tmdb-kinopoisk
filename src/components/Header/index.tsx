import logo from "../../assets/logo.svg";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.png";

import s from "./header.module.scss";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import type { RootState } from "../../redux/store";

export default function Header() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        zIndex: 1000,
        padding: "16px",
        boxShadow: "1px 1px 1px 1px rgba(191,191,191,0.75);",
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link className={s.logo} to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul className={s.menu}>
            <li className={s.menu__item}>
              <Link to="/">Main</Link>
            </li>
            <li className={s.menu__item}>
              <Link to="/categories/popular">Category movies</Link>
            </li>
            <li className={s.menu__item}>
              <Link to="/filtered"> Filtered movies</Link>
            </li>
            <li className={s.menu__item}>
              <Link to="/search">Search</Link>
            </li>
            <li className={s.menu__item}>
              <Link to="favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        <IconButton
          aria-label="theme"
          sx={{
            width: "50px",
            height: "50px",
            border: "1px solid #ccc",
            p: 0,
          }}
          onClick={() => dispatch(toggleTheme())}
        >
          <Box
            component="img"
            src={mode === "light" ? sun : moon}
            alt={mode === "light" ? "sun" : "moon"}
            sx={{
              width: 24,
              height: 24,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
