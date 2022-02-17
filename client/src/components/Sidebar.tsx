import { EventNote } from "@mui/icons-material";
import { Drawer, List } from "@mui/material";
import React, { FC } from "react";

export const Sidebar: FC = (props) => {
  return (
    <Drawer
      sx={{
        width: "200px",
        flexShrink: 0,
      }}
      variant="permanent"
      anchor="left"
    >
      <List style={{ width: "200px" }}>{props.children}</List>
    </Drawer>
  );
};
