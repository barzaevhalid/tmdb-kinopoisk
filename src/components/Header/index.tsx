import logo from "../../assets/logo.svg";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.png";

import s from "./header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [changeTheme, setChangeTheme] = useState(true);
  return (
    <Box
      component="header"
      sx={{
        position: "sticky", // или fixed
        zIndex: 1000, // выше секции
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
              <Link to="/categories">Category mobies</Link>
            </li>
            <li className={s.menu__item}>
              <Link to="/filtered"> Filtered mobies</Link>
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
          onClick={() => setChangeTheme((prev) => !prev)}
        >
          <Box
            component="img"
            src={changeTheme ? sun : moon}
            alt={changeTheme ? "sun" : "moon"}
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
