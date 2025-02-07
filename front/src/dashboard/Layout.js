import React from 'react';
import { Link } from 'react-router-dom';
import './vibe.css';

function Layout({ children }) {
  return (
    <div className='vibe-container'>
      <aside className='vibe-sidebar'>
        <nav>
          <ul>
            <li>
              <i className="bi bi-list"></i> {/* Ícone adicionado */}
            </li>
            <li>
              <i className="bi bi-clipboard-data"></i>
              <Link to="/dashboard" className="menu-text">Dashboard</Link>
            </li>
            <li>
              <i className="bi bi-credit-card-fill"></i>
              <Link to="/transacoes" className="menu-text">Transações</Link>
            </li>
            <li>
              <i className="bi bi-cash-coin"></i>
              <Link to="/recebimento" className="menu-text">Recebimento</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='vibe-content'>
        {children}
      </div>
    </div>
  );
}

export default Layout;