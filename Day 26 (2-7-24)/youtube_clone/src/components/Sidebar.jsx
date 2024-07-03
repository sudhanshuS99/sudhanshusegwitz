import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constants";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  ></Stack>
);

export default Sidebar;
