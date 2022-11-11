import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SportsPage from "./pages/SportsPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
          
        <Route path="register" element={<RegisterPage />} />
        <Route path="sports" element={<SportsPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}



export default App;

