import {
  Stack,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import React from "react";

function HiddenColumnList({ hiddenColumn, addColumn }) {
  return (
    <>
      <Box>
        <Stack>
          {hiddenColumn?.length > 0 ? (
            hiddenColumn.map((item) => (
              <ListItemButton>
                <ListItemIcon>
                  <ViewColumnIcon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => addColumn(item.id)}
                >
                  Add
                </Button>
              </ListItemButton>
            ))
          ) : (
            <p>No hidden columns</p>
          )}
        </Stack>
      </Box>
    </>
  );
}

export default HiddenColumnList;
