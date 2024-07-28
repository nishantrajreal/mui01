import { Button, styled, Typography } from "@mui/material";
import { AcUnit, Adb, AddReaction } from "@mui/icons-material/";

function App() {
  const RedButton = styled(Button)({
    color:"white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "yellow",
      color: "black",
    },
  });

  const ThemeButton = styled(Button)(({theme})=>({
    color:"black",
    backgroundColor:theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "black",
    },
  }));

  return (
    <div className="App">
      <h1>hello world</h1>
      <Button variant="text" color ="otherColor">Text</Button>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        startIcon={<Adb />}
      >
        Contained
      </Button>
      <Button variant="outlined" startIcon={<AcUnit />}>
        Cold Palmer
      </Button>
      <Typography variant="h1" component="h2">
        It uses h1 style but it is h2 tag
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddReaction />}
        sx={{
          backgroundColor: "Blue",
          "&:hover": {
            backgroundColor: "White",
            color: "black",
          },
        }}
      >
        Custom
      </Button>
      <RedButton>Reusable</RedButton>
      <ThemeButton>Theme</ThemeButton>
    </div>
  );
}

export default App;
