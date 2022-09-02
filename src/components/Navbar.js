//importaciones
import React from "react";

//react-router-dom
import { Link } from "react-router-dom";

//material-ui
import { Stack } from "@mui/material";

//constantes
import { logo } from "../utils/constants";

//componentes
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
