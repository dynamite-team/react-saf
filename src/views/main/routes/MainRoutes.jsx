import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../home/Home";
import Catalogo from "../catalogo/catalogo";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Catalogo" element={<Catalogo />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
