import { MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

function TableInput({ value, handleValueChange, disabled, type, options }) {
  if (disabled) {
    return <Typography>{value}</Typography>;
  }
  if (type === "select") {
    return (
      <Select
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
        value={value}
        onChange={handleValueChange}
      >
        {options?.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    );
  }

  return (
    <TextField
      size="small"
      variant="standard"
      fullWidth
      value={value}
      onChange={handleValueChange}
      sx={{
        ".MuiTextField-root": {
          border: "none",
        },
        // minWidth: "200px",
      }}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
}

export default TableInput;
