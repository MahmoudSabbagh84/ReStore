import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route } from "react-router-dom";
import HomePage from "../../features/Home/HomePage";
import Catalog from "../../features/Catalog/Catalog";
import ProductDetails from "../../features/Catalog/ProductDetails";
import AboutPage from "../../features/About/AboutPage";
import ContactPage from "../../features/Contact/ContactPage";


function App() {
  const [darkMode, setDarkmode] = useState(true);
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
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/catalog' component={Catalog}/>
        <Route path='/catalog/:id' component={ProductDetails}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
