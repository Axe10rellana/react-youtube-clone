//importaciones
import React, { useState } from "react";

//react-router-dom
import { useNavigate } from "react-router-dom";

//material-ui
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  //variables de estado
  const [searchTerm, setSearchTerm] = useState("");

  //hooks
  const navigate = useNavigate();

  //funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="Buscar"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
