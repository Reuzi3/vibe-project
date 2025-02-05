import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './homepage.css';

// Importando os assets
import vibeLogo from '../assets/Ativo 31.png';
import exampleImage from '../assets/dona.34eb76f2.gif';
import hipayLogo from '../assets/hipay.svg';
import yogamersLogo from '../assets/yogamersdobem.png';
import whatsappLogo from '../assets/whats.svg';

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, when: 'beforeChildren' },
  },
};

const elementVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/** Animação do menu mobile com duração de 0.2s para abrir mais rápido */
const mobileMenuVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } },
};

const Homepage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      className="homepage"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <header className="navbar">
        <motion.img
          src={vibeLogo}
          alt="Logo"
          className="logo"
          variants={elementVariants}
        />

        {/* Navbar para resoluções maiores */}
        <motion.nav className="navbar-desktop" variants={elementVariants}>
          <div className="navbar-buttons">
            <button className="login-button">Entrar</button>
            <button className="register-button">Registrar</button>
          </div>
        </motion.nav>

        {/* Ícone para mobile */}
        <motion.div className="navbar-mobile" variants={elementVariants}>
          <button onClick={toggleMobileMenu} className="hamburger-button">
            <span className="hamburger-icon"></span>
          </button>
        </motion.div>
      </header>

      {/* Menu mobile com animação */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <button className="login-button" onClick={toggleMobileMenu}>
              Entrar
            </button>
            <button className="register-button" onClick={toggleMobileMenu}>
              Registrar
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.main className="content" variants={elementVariants}>
      <div className="main-text">
  <motion.h1 variants={elementVariants}>
    Receba donates <br />
     e vendas pela <br />
    menor taxa!
  </motion.h1>
  <motion.p variants={elementVariants}>
    Receba doações em texto, áudio e mensagens personalizadas, tudo pela
    menor taxa de <strong style={{ color: '#39e5e7' }}>2.5%</strong> <br />
    Crie sua conta agora e comece imediatamente
  </motion.p>
  <motion.button className="cta-button" variants={elementVariants}>
    Crie sua conta agora
  </motion.button>
</div>


        <motion.div className="image-section" variants={elementVariants}>
          <img src={exampleImage} alt="Streamer" className="streamer-image" />
        </motion.div>
      </motion.main>




{/* Seção extra de texto */}
<motion.section className="extra-info" variants={elementVariants}>
  <p>
    Somos a plataforma <strong>mais rápida e barata</strong> do mercado para
    enviar <strong>mensagens de texto</strong> aos seus streamers!
  </p>
</motion.section>


      <motion.section className="partners" variants={elementVariants}>
        <motion.h3 variants={elementVariants}>Parceiros</motion.h3>
        <motion.div className="partners-logos" variants={elementVariants}>
          <img src={hipayLogo} alt="Hipay" />
          <img src={yogamersLogo} alt="Yo Gamers do Bem" />
        </motion.div>
      </motion.section>

      <footer className="whatsapp-button">
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <motion.img src={whatsappLogo} alt="WhatsApp" variants={elementVariants} />
        </a>
      </footer>
    </motion.div>
  );
};

export default Homepage;
