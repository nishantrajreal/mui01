import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  BedroomBaby,
  Cottage,
  DarkMode,
  Deck,
  Home,
  MapsHomeWork,
} from "@mui/icons-material/";
import React from "react";

function Sidebar({setMode, mode}) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#office">
              <ListItemIcon>
                <MapsHomeWork />
              </ListItemIcon>
              <ListItemText primary="Office" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#cottage">
              <ListItemIcon>
                <Cottage />
              </ListItemIcon>
              <ListItemText primary="Cottage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#holiday">
              <ListItemIcon>
                <Deck />
              </ListItemIcon>
              <ListItemText primary="Holiday" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#toy">
              <ListItemIcon>
                <BedroomBaby />
              </ListItemIcon>
              <ListItemText primary="Toy" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#toy">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch onChange={()=>setMode(mode ==="light" ? "dark": "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
