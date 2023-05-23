import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themeConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
