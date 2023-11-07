import React from "react";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import TableInput from "./CustomInput";

function UserDisplay({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  editable,
}) {
  return (
    <List sx={{ width: "250px" }}>
      <ListItem sx={{ padding: "0px" }}>
        <ListItemAvatar>
          <Avatar size="small">
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            editable ? (
              <TableInput value={name} handleValueChange={handleNameChange} />
            ) : (
              name
            )
          }
          secondary={
            editable ? (
              <TableInput value={email} handleValueChange={handleEmailChange} />
            ) : (
              email
            )
          }
        />
      </ListItem>
    </List>
  );
}

export default UserDisplay;
