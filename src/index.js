import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./components/context/shopcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
    <App />

    </ShopContextProvider>
  </React.StrictMode>
);
