import { useState, useEffect } from 'react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);

  const closeMobileMenus = () => {
    setMobileMenuOpen(false);
    setMobileNosotrosOpen(false);
    setMobileServiciosOpen(false);
  };

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
            <a href="#como-elegir">Por qué elegirnos</a>
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
            <li><a href="#" className="active" onClick={closeMobileMenus}>INICIO</a></li>
            <li className={`nav-item-dropdown ${mobileNosotrosOpen ? 'mobile-open' : ''}`}>
              <a 
                href="#nosotros" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setMobileNosotrosOpen(!mobileNosotrosOpen); 
                }}
                className="dropdown-toggle"
              >
                NOSOTROS
                <svg className="dropdown-arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.35rem', transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#/nuestros-lideres" onClick={closeMobileMenus}>Nuestros líderes</a></li>
                <li><a href="#/mision-vision" onClick={closeMobileMenus}>Misión y Visión</a></li>
                <li><a href="#/valores-corporativos" onClick={closeMobileMenus}>Valores Corporativos</a></li>
              </ul>
            </li>
            <li className={`nav-item-dropdown ${mobileServiciosOpen ? 'mobile-open' : ''}`}>
              <a 
                href="#programas" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setMobileServiciosOpen(!mobileServiciosOpen); 
                }}
                className="dropdown-toggle"
              >
                PROGRAMAS
                <svg className="dropdown-arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.35rem', transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#programas-capacitacion" onClick={closeMobileMenus}>Programas de Capacitación</a></li>
                <li><a href="#/plan-de-accion" onClick={closeMobileMenus}>Plan de Acción</a></li>
                <li><a href="#/modelo-de-desarrollo" onClick={closeMobileMenus}>Modelo de Desarrollo</a></li>
              </ul>
            </li>
            <li><a href="#como-elegir" onClick={closeMobileMenus}>POR QUÉ ELEGIRNOS</a></li>
            <li><a href="#casos-de-exito" onClick={closeMobileMenus}>CASOS DE ÉXITO</a></li>
            <li><a href="#footer-contacto" onClick={closeMobileMenus}>CONTACTO</a></li>
            
            <li className="mobile-only-menu-section">
              <span className="mobile-section-title">Programas de Capacitación</span>
              <ul className="mobile-services-list">
                <li><a href="#programas-capacitacion" onClick={closeMobileMenus}>Gestión del Talento Humano</a></li>
                <li><a href="#programas-capacitacion" onClick={closeMobileMenus}>Seguridad y Salud Ocupacional</a></li>
                <li><a href="#programas-capacitacion" onClick={closeMobileMenus}>Marketing, Ventas y Servicio</a></li>
                <li><a href="#programas-capacitacion" onClick={closeMobileMenus}>Desarrollo Organizacional</a></li>
                <li><a href="#programas-capacitacion" onClick={closeMobileMenus}>Asesorías Especializadas</a></li>
              </ul>
            </li>

            <li className="mobile-only-menu-section">
              <span className="mobile-section-title">Contacto Rápido</span>
              <div className="mobile-contact-info">
                <a href="mailto:info@baluartalent.com" className="mobile-contact-link">info@baluartalent.com</a>
                <a href="tel:+59323617038" className="mobile-contact-link">Telf: (+593) 2 3617038</a>
                <a href="tel:+593964196795" className="mobile-contact-link">Cel: 0964196795</a>
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

      {/* 3. BOTTOM BAR (Fila Inferior - Programas) */}
      <div className="navbar-bottom-bar">
        <div className="container bottom-bar-container">
          <div className="services-links">
            <a href="#programas-capacitacion">TALENTO HUMANO</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">SEGURIDAD Y SALUD</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">MARKETING Y VENTAS</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">DESARROLLO ORG.</a>
            <span className="bullet">•</span>
            <a href="#programas-capacitacion">ASESORÍAS</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
