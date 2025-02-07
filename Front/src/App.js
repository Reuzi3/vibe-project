import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Vibe from "./dashboard/vibe";
import Transacoes from "./dashboard/Transacoes";
import Recebimento from "./dashboard/Recebimento";
import "./App.css"; // Estilos globais (opcional)

function App() {
  return (
    <Routes>
      {/* Rota para a página inicial */}
      <Route path="/" element={<Homepage />} />

      {/* Rota para /dashboard que renderiza Vibe */}
      <Route path="/Dashboard" element={<Vibe />} />

      {/* Rotas adicionais para Transações e Recebimento */}
      <Route path="/Transacoes" element={<Transacoes />} />
      <Route path="/Recebimento" element={<Recebimento />} />
    </Routes>
  );
}

export default App;