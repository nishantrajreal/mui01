import React, { useState } from "react";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";

function Main() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme ={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar direction="row" justifyContent="space-between" />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setThemeMode} mode={themeMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default Main;
