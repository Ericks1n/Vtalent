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
      <div className="container navbar-container">
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.png" alt="BALUARTALENT & Co." style={{ height: '42px', objectFit: 'contain' }} />
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#" className="active" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a></li>
          <li><a href="#como-elegir" onClick={() => setMobileMenuOpen(false)}>Por Qué Nosotros</a></li>
          <li><a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
          <li><a href="#contacto" onClick={(e) => { e.preventDefault(); onOpenContact(); setMobileMenuOpen(false); }}>Contacto</a></li>
        </ul>

        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
          <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
        </button>
      </div>
    </nav>
  );
}
