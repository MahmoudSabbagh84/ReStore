import Catalog from "../../features/Catalog/Catalog";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { Container } from "@mui/system";
import { useState } from "react";


function App() {
  const [darkMode, setDarkmode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette:{
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkmode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
