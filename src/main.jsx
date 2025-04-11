import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CategoryProvider } from "@/context/CategoryContext";
import { ThemeProvider } from "@/components/theme-provider"; // pastikan file ini sudah dibuat

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
