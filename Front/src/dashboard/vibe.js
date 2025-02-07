import React from 'react';
import Layout from './Layout';
import './vibe.css';

function Vibe() {
  return (
    <Layout>
      <header className='vibe-header'>
        <div className='informacoes'>
          <i className="bi bi-person-circle"><p>Luiz</p></i> {/* Ícone do Bootstrap */}
        </div>
        <div>
          <h2 className='vibe-dash'>Visao Geral</h2>
          <div className='vibe-body'>
            <h2 className="vibe-card">Quantidade de donates</h2>
            <h2 className='vibe-card'>Receita total</h2>
          </div>
          <div className='cards'>
            <div className='vibe-quantidade'>
              <h3 className=''>10</h3>
              <h3>0</h3>
              <p className="">Últimos 30 dias</p>
            </div>
            <div className='vibe-quantidade'>
              <h3 className=''>10</h3>
              <h3>0</h3>
              <p className="">Últimos 30 dias</p>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Vibe;