import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import RegisterPage from "./pages/RegisterPage";
import SportsPage from "./pages/SportsPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
          
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<SportsPage />} />
      
       
      </Routes>
    </BrowserRouter>
  );
}



export default App;

