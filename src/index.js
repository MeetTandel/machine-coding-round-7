import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TripProvider } from "./context/TripContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <TripProvider>
        <App />
      </TripProvider>
    </Router>
  </React.StrictMode>
);