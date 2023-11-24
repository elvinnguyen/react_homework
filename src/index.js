import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { HashRouter } from "react-router-dom";

import Route from "./route";

const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Route />
  </HashRouter>
);