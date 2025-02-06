import React from "react";
import {  Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage"; 
import Vibe from "./dashboard/vibe";
import "./App.css"; // Estilos globais (opcional)
import "./dashboard/vibe.css"; // Estilos do componente Vibe (opcional)


function App() {
  return (
    
    <Routes>
      {/* Rota para a página inicial */}
      <Route path="/" element={<Homepage />} />

      {/* Rota para /dashboard que renderiza Vibe */}
      <Route path="/dashboard" element={<Vibe />} />
    </Routes>
  );
}

export default App;
