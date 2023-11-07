import * as React from "react";

// Assests import

import SearchIcon from "../../assets/dashboard/search.png";
import FilterIcon from "../../assets/icons/filter.png";
import CalendarIcon from "../../assets/icons/calendar.png";
import CheckIcon from "../../assets/icons/check.png";
import SortIcon from "../../assets/icons/arrow.png";

// Mui Imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function FilterBar() {
  return (
    <AppBar position="static" color="white" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
        }}
      >
        <Stack spacing={2} direction="row">
          <TextField
            fullWidth
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
          <FormControl fullWidth size="small">
            <InputLabel id="assignedLabel">Filter By Assigned</InputLabel>
            <Select
              startAdornment={
                <InputAdornment position="start">
                  <img src={FilterIcon} />
                </InputAdornment>
              }
              labelId="assignedLabel"
              id="assigned"
              label="Filter By Assigned"
            ></Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="dateLabel">Date</InputLabel>
            <Select
              startAdornment={
                <InputAdornment position="start">
                  <img src={CalendarIcon} />
                </InputAdornment>
              }
              labelId="dateLabel"
              id="date"
              label="Date"
            ></Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel id="statusLabel">Status</InputLabel>
            <Select
              startAdornment={
                <InputAdornment position="start">
                  <img src={CheckIcon} />
                </InputAdornment>
              }
              labelId="statusLabel"
              id="status"
              label="Status"
            ></Select>
          </FormControl>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button color="grey" startIcon={<img src={FilterIcon} />}>
            Filter
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button color="grey" startIcon={<img src={SortIcon} />}>
            Sort
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button color="grey" startIcon={<img src={FilterIcon} />}>
            Saved Filter
          </Button>
          <Button>Clear</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
