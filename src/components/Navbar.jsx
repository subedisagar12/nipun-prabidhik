import * as React from "react";

// Assests import
import UserIcon from "../assets/icons/user.png";
import MoreIcon from "../assets/dashboard/more.png";

// Mui Imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { MenuItem, Select } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" color="white" sx={{}}>
      <Toolbar>
        <img src={UserIcon} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: "10px" }}
        >
          Clients
        </Typography>
        <Stack direction="row" spacing={1}>
          <Select id="demo-simple-select" size="small" value="kathmandu">
            <MenuItem selected={true} value="kathmandu">
              Branch (Kathmandu)
            </MenuItem>
          </Select>

          <IconButton>
            <img src={MoreIcon} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
