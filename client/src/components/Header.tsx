import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import { color } from "@mui/system";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton sx={{ color: "inherit" }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ mr: "8px" }}>
          <Avatar src="https://psb4ukr.natocdn.net/criminals/1d/0c/51/Vikernes-Varg-1.jpg"></Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
