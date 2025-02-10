import React from 'react';
import Layout from './Layout';
import './vibe.css';

function EstilodeAlerta() {
  return (
    <Layout>
      <header className='vibe-header'>
        <div className='informacoes'>
          <i className="bi bi-person-circle icon-perfil"><p>Luiz</p></i> {/* Ícone do Bootstrap */}
        </div>
      </header>
      <h2 className='vibe-dash icon-perfil'>Visao Geral</h2>
      <main className='vibe-main'>
        <div className='vibe-names'>
          <div className='vibe-body'>
            <h2 className="vibe-card">Quantidade de donates</h2>
            <h2 className='vibe-card'>Receita total</h2>
          </div>
          <div className='cards'>
            <div className="vibe-quantidade">
              <i className="bi bi-bar-chart card-icons"></i> {/* Ícone isolado */}
              <div className="text-group">
                <p className="info-1">0</p> {/* Número */}
                <p className="info">Últimos 30 dias</p> {/* Texto abaixo */}
              </div>
            </div>
            <div className='vibe-quantidade'>
              <i className="bi bi-pen card-icons-2"></i> {/* Ícone isolado */}
              <div className="text-group">
                <p className="info-1">R$ 0,00</p> {/* Número */}
                <p className="info">Últimos 30 dias</p> {/* Texto abaixo */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default EstilodeAlerta;