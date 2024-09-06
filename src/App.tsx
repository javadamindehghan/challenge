import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TabShow from "./pages/TabShow";
import Download from "./pages/Download";
import { Container, ThemeProvider } from "@mui/material";
import { createTheme } from "@material-ui/core";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <TabShow />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
