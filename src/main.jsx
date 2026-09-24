import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import theme from "./theme/theme";
import { PredictionProvider } from "./context/PredictionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PredictionProvider>
          <App />
        </PredictionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);