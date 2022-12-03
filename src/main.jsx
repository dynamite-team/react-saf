import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

//Comentado para que no produzca errores *descomentar en el futuro
//import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
