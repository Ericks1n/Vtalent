import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* 1. TOP BAR (Fila Superior - Contacto) */}
      <div className="navbar-top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-contact">
            <span>¿Preguntas?</span>
            <span className="separator">|</span>
            <a href="mailto:info@baluartalent.com">info@baluartalent.com</a>
            <span className="separator">|</span>
            <a href="tel:+593999999999">+593 99 999 9999</a>
            <span className="separator">|</span>
            <a href="#como-elegir">FAQ</a>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BAR (Fila Media - Navegación Principal) */}
      <div className="navbar-middle-bar">
        <div className="container middle-bar-container">
          <a href="#" className="logo">
            <img 
              src="/logo.png" 
              alt="BALUARTALENT & Co." 
              style={{ 
                height: scrolled ? '46px' : '56px', 
                transition: 'height 0.3s ease', 
                objectFit: 'contain' 
              }} 
            />
          </a>

          {/* Menú de Navegación Principal */}
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#" className="active" onClick={() => setMobileMenuOpen(false)}>INICIO</a></li>
            <li><a href="#como-elegir" onClick={() => setMobileMenuOpen(false)}>NOSOTROS</a></li>
            <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>PORTAFOLIO</a></li>
            <li><a href="#como-elegir" onClick={() => setMobileMenuOpen(false)}>RECURSOS</a></li>
            <li><a href="#blog" onClick={() => setMobileMenuOpen(false)}>BLOG</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); onOpenContact(); setMobileMenuOpen(false); }}>CONTACTO</a></li>
            
            {/* Elementos exclusivos para Móvil en el menú desplegable */}
            <li className="mobile-only-menu-section">
              <span className="mobile-section-title">Nuestros Servicios</span>
              <ul className="mobile-services-list">
                <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Selección y Reclutamiento</a></li>
                <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Outsourcing de Nómina</a></li>
                <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Clima y Desempeño</a></li>
                <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Capacitación y Desarrollo</a></li>
                <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Consultoría de Talento</a></li>
                <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Headhunting</a></li>
              </ul>
            </li>

            <li className="mobile-only-menu-section">
              <span className="mobile-section-title">Contacto Rápido</span>
              <div className="mobile-contact-info">
                <a href="mailto:info@baluartalent.com" className="mobile-contact-link">info@baluartalent.com</a>
                <a href="tel:+593999999999" className="mobile-contact-link">+593 99 999 9999</a>
              </div>
            </li>
          </ul>

          <div className="middle-bar-right">
            <button className="nav-cta-btn" onClick={onOpenContact}>
              ¿CONSULTAS? 💬
            </button>

            <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR (Fila Inferior - Servicios) */}
      <div className="navbar-bottom-bar">
        <div className="container bottom-bar-container">
          <div className="services-links">
            <a href="#servicios">SELECCIÓN Y RECLUTAMIENTO</a>
            <span className="bullet">•</span>
            <a href="#servicios">OUTSOURCING DE NÓMINA</a>
            <span className="bullet">•</span>
            <a href="#servicios">CLIMA Y DESEMPEÑO</a>
            <span className="bullet">•</span>
            <a href="#servicios">CAPACITACIÓN Y DESARROLLO</a>
            <span className="bullet">•</span>
            <a href="#servicios">CONSULTORÍA DE TALENTO</a>
            <span className="bullet">•</span>
            <a href="#servicios">HEADHUNTING</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
