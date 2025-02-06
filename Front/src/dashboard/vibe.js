import React from 'react';
import './vibe.css';

function Vibe() {
  return (
    <div className='vibe-container'>
      <aside className='vibe-sidebar'>
        <nav>
          <ul>
            <li>
              <i className="bi bi-house"></i>
              <span className="menu-text">Home</span>
            </li>
            <li>
              <i className="bi bi-person"></i>
              <span className="menu-text">Seller</span>
            </li>
            <li>
              <i className="bi bi-speedometer2"></i>
              <span className="menu-text">Dashboard</span>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='vibe-content'>
        <header className='vibe-header'>
          <div className='informacoes'>
            <p>Home &gt; Seller &gt; dashboard</p>
            <i className="bi bi-person-circle"><p>Luiz</p></i> {/* Ícone do Bootstrap */}
          </div>
          <div className='vibe-body'>
            <h2 className='vibe-dash'>Dashboard</h2>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Vibe;