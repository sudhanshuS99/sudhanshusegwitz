import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Grid } from "@mui/material";
const App = () => {
  return (
    <div>
      {/* <Button
        variant="contained"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        First MUI component
      </Button> */}
      <Grid container>
        <Navbar />
      </Grid>
    </div>
  );
};

export default App;
