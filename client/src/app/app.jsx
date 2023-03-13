import React, { useEffect  } from 'react';
import { AppRouter } from '../routing/';
import { ThemeProvider } from "styled-components";

function App() {
  useEffect(() => {
    document.title = "Knownet";
  }, []);

  const theme = {
    fg: "palevioletred",
    bg: "white",
  };

  return (
    <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
  );
}

export default App;