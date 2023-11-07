import * as React from "react";

import { Box, Divider, Typography } from "@mui/material";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ children, open, handleClose, title }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {title && (
            <Box mb={3}>
              <Typography id="modal-modal-title" component="h2">
                {title}
              </Typography>
              <Divider />
            </Box>
          )}
          {children}
        </Box>
      </Modal>
    </div>
  );
}
