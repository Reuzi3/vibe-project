import React from 'react';
import Layout from './Layout';

function Transacoes() {
  return (
    <Layout>
      <header className='vibe-header'>
        <div className='informacoes'>
          <i className="bi bi-person-circle"><p>Luiz</p></i> {/* Ícone do Bootstrap */}
        </div>
        <div className='vibe-body'>
          <h2 className='vibe-dash'>Transações</h2>
        </div>
      </header>
    </Layout>
  );
}

export default Transacoes;