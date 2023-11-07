import { Box, TextField } from "@mui/material";
import React from "react";

function TextInput({ label, value, handleChange, name, error }) {
  return (
    <>
      <Box my={2}>
        <TextField
          error={error}
          fullWidth
          label={label}
          name={name}
          value={value}
          onChange={handleChange}
          variant="outlined"
          size="small"
          id="my-input"
        />
      </Box>
    </>
  );
}

export default TextInput;
