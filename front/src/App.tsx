import Routers from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles";
import theme from "./types/Theme";
import { ToastProvider } from "./hooks/useToast";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastProvider>
          <Routers />
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
