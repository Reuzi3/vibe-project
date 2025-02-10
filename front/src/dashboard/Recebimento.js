// src/dashboard/Recebimento.js
import React, { useState } from 'react';
import Layout from './Layout'; // Correto, pois Layout.js está na mesma pasta (dashboard)
import './vibe.css'; // Correto, pois vibe.css está na mesma pasta
import './Recebimento.css'; // Correto, pois Recebimento.css está na mesma pasta

import { dadosTabelas, adicionarItem, removerItem } from '../Utils/tabelaUtils';

function Recebimento() {
  const [abaAtual, setAbaAtual] = useState("contas");
  const [dados, setDados] = useState(dadosTabelas[abaAtual].dados);

  const mudarAba = (novaAba) => {
    setAbaAtual(novaAba);
    setDados([...dadosTabelas[novaAba].dados]);
  };

  const handleAdicionar = () => {
    adicionarItem(abaAtual);
    setDados([...dadosTabelas[abaAtual].dados]);
  };

  const handleRemover = (index) => {
    removerItem(abaAtual, index);
    setDados([...dadosTabelas[abaAtual].dados]);
  };

  return (
    <Layout>
      <header className='vibe-header'>
        <div className='informacoes'>
          <i className="bi bi-person-circle icon-perfil"><p>Luiz</p></i>
        </div>
      </header>
      <h2 className='vibe-dash icon-perfil'>Saldo e Saque</h2>
      <main className='vibe-main'>
        <div className='vibe-names'>
          <div className='cards'>
            <div className="vibe-quantidade-1">
              <i className="bi bi-bar-chart card-icons"></i>
              <div className="text-group">
                <p className="info">Últimos 30 dias</p>
                <p className="info-1">R$ 0,00</p>
              </div>
            </div>
            <div className='vibe-quantidade-1'>
              <i className="bi bi-pen card-icons-2"></i>
              <div className="text-group">
                <p className="info">Últimos 30 dias</p>
                <p className="info-1">R$ 0,00</p>
              </div>
              <button className='button-style'>Efetuar Saque</button>
            </div>
          </div>

          <div className="container">
            {/* Abas */}
            <div className="tabs">
              <button className={`tab ${abaAtual === "contas" ? "active" : ""}`} onClick={() => mudarAba("contas")}>
                Contas Bancárias
              </button>
              <button className={`tab ${abaAtual === "saques" ? "active" : ""}`} onClick={() => mudarAba("saques")}>
                Saques
              </button>
              <button className={`tab ${abaAtual === "notas" ? "active" : ""}`} onClick={() => mudarAba("notas")}>
                Notas
              </button>
            </div>

            {/* Botão Adicionar */}
            <button className='button-style' onClick={handleAdicionar}>Adicionar Item</button>

            {/* Tabela */}
            <table id="tabela">
              <thead>
                <tr>
                  {dadosTabelas[abaAtual].colunas.map((coluna, index) => (
                    <th key={index}>{coluna}</th>
                  ))}

                </tr>
              </thead>
              <tbody>
                {dados.length > 0 ? (
                  dados.map((linha, index) => (
                    <tr key={index}>
                      {linha.map((item, i) => (
                        <td key={i}>{item}</td>
                      ))}
                      <td>
                        <button onClick={() => handleRemover(index)}>Remover</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={dadosTabelas[abaAtual].colunas.length + 1} style={{ textAlign: "center" }}>
                      ⚠ Nenhum item encontrado, adicione agora mesmo
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Recebimento;
