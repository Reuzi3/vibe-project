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
            <i class="bi bi-columns-gap"></i>
              <Link to="/dashboard" className="menu-text">Dashboard</Link>
            </li>
            <li>
            <i class="bi bi-credit-card-2-back"></i>
              <Link to="/Recebimento" className="menu-text">Recebimentos</Link>
            </li>
            <li>
              <i className="bi bi-cash-coin"></i>
              <Link to="/PaineldeDonates" className="menu-text">Painel de Donates</Link>
            </li>
            <li>
            <i class="bi bi-bell"></i>
              <Link to="/EstilodeAlerta" className="menu-text">Estilo de Alerta</Link>
            </li>
            <li>
            <i class="bi bi-cpu"></i>
              <Link to="/Integracao" className="menu-text">Integrações</Link>
            </li>
            <li>
            <i class="bi bi-box-arrow-right"></i>
              <Link to="/Sair" className="menu-text">Sair</Link>
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