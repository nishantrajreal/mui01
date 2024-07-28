import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friend
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0Au6KMF9u-vu2fnUAZZCNLYxOXpfP9SRBQ&s"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYGnI7hkrIJytUTBshEo2uEWgjPn-noTycA&s"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://www.coolantarctica.com/Antarctica%20fact%20file/wildlife/Arctic_animals/Delphinapterus_leucas_Steve-snodgrass-CC2-Att-Gen-med.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Travis Howard"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0Au6KMF9u-vu2fnUAZZCNLYxOXpfP9SRBQ&s"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Cindy Baker"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYGnI7hkrIJytUTBshEo2uEWgjPn-noTycA&s"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Agnes Walker"
              src="https://www.coolantarctica.com/Antarctica%20fact%20file/wildlife/Arctic_animals/Delphinapterus_leucas_Steve-snodgrass-CC2-Att-Gen-med.jpg"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
