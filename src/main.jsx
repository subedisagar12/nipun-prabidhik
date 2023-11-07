import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7474C9",
    },

    white: {
      main: "#fff",
    },
    grey: {
      main: "#667085",
    },
    success: {
      main: "#4AC86E",
    },
  },
  typography: {
    fontFamily: ["Inter"],
    fontSize: 12,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
