import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/Colorvariables.css";
import noise from "./assets/noise.jpg";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ "--noise": `url(${noise})` }}>
      <App />
    </div>
  </StrictMode>,
);
