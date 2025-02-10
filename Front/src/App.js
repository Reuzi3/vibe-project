import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Vibe from "./dashboard/vibe";
import Recebimento from "./dashboard/Recebimento";
import PaineldeDonates from "./dashboard/PaineldeDonates";
import EstilodeAlerta from "./dashboard/EstilodeAlerta";
import Integracao from "./dashboard/Integracao";
import "./App.css"; // Estilos globais (opcional)

function App() {
  return (
    <Routes>
      {/* Rota para a página inicial */}
      <Route path="/" element={<Homepage />} />

      {/* Rota para /dashboard que renderiza Vibe */}
      <Route path="/Dashboard" element={<Vibe />} />

      {/* Rotas adicionais para Transações e Recebimento */}

      <Route path="/Recebimento" element={<Recebimento />} />
      <Route path="/PaineldeDonates" element={<PaineldeDonates />} />
      <Route path="/EstilodeAlerta" element={<EstilodeAlerta />} />
      <Route path="/Integracao" element={<Integracao />} />
    </Routes>
  );
}

export default App;