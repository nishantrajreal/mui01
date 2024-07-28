import { Fab, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Add as AddIcon } from "@mui/icons-material";

function Add() {
  return (
    <Tooltip
      title="Add"
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% -25px)", md: 30 },
      }}
    >
      <IconButton>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </IconButton>
    </Tooltip>
  );
}

export default Add;
