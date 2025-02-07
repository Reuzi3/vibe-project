import React from 'react';
import Layout from './Layout';

function Recebimento() {
  return (
    <Layout>
      <header className='vibe-header'>
        <div className='informacoes'>
          <i className="bi bi-person-circle"><p>Luiz</p></i> {/* Ícone do Bootstrap */}
        </div>
        <div className='vibe-body'>
          <h2 className='vibe-dash'>Recebimento</h2>

        </div>
      </header>
    </Layout>
  );
}

export default Recebimento;