import * as React from "react";

// Mui Imports
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { InputAdornment, TextField } from "@mui/material";

// Assets Import
import Image from "../assets/icons/arrow-down-01-sharp.png";

import MoreIcon from "../assets/dashboard/more.png";
import SearchIcon from "../assets/dashboard/search.png";

// Components Import
import { sidemenu } from "../data/SideMenu";
import Navbar from "./Navbar";
import DataTable from "./Table";

const drawerWidth = 240;

export default function Layout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              position: "relative",
              height: "100vh",
              border: "none",
            },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <p>CRM</p>
            <IconButton
              style={{
                background: "#9696A4A8",
                width: "25px",
                height: "25px",
                borderRadius: "0px",
                position: "absolute",
                right: "0px",
                top: "0px",
              }}
            >
              <img
                src={Image}
                style={{
                  transform: "rotate(90deg)",
                }}
              />
            </IconButton>
          </Toolbar>
          <Divider />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem>
                <TextField
                  id="outlined-start-adornment"
                  size="small"
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={SearchIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
              </ListItem>
              {sidemenu.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <img src={item.icon} />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />

                    <IconButton>
                      <img src={MoreIcon} />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ px: 2, width: "100%", overflow: "hidden" }}>
          <Navbar />
          <DataTable />
        </Box>
      </Box>
    </>
  );
}
