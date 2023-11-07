import * as React from "react";

// Assests import
import DotIcon from "../assets/icons/dots-grid.png";
import AddIcon from "../assets/icons/plus.png";
import BellIcon from "../assets/icons/bell-02.png";
import MailIcon from "../assets/icons/mail-01.png";
import SettingIcon from "../assets/icons/settings-02.png";
import ArrowDownIcon from "../assets/icons/arrow-down-01-sharp.png";
import DarkModeIcon from "../assets/icons/moon-01.png";
import AvatarImage from "../assets/images/avatar.png";
// Mui Imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Avatar, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default function Topbar({ position }) {
  return (
    <AppBar
      position={position || "fixed"}
      color="white"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={DotIcon} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Test Project
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <img src={AddIcon} />
          </IconButton>
          <IconButton aria-label="delete">
            <img src={BellIcon} />
          </IconButton>
          <IconButton aria-label="delete">
            <img src={MailIcon} />
          </IconButton>

          <IconButton aria-label="delete">
            <img src={SettingIcon} />
          </IconButton>

          <IconButton aria-label="delete">
            <img src={DarkModeIcon} />
          </IconButton>

          <Divider orientation="vertical" flexItem />
          <Avatar src={AvatarImage} />
          <IconButton>
            <img src={ArrowDownIcon} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
