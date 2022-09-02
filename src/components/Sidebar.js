//importaciones
import React from "react";

//material-ui
import { Stack } from "@mui/material";

//constantes
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories?.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category?.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category?.name)}
          key={category?.name}
        >
          <span
            style={{
              color: category?.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {category?.icon}
          </span>
          <span
            style={{
              opacity: category?.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category?.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
