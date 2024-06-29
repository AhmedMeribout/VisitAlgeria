import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";



const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;