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
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
            <path d="M20 15L50 75L80 15H60L50 50L40 15H20Z" fill="url(#logo-grad)" />
            <path d="M40 15L50 38L60 15H80L50 85L20 15H40Z" fill="url(#logo-grad)" opacity="0.8" />
          </svg>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-heading)', letterSpacing: '-0.03em' }}>
            BALUARTALENT<span style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '600', marginLeft: '0.2rem' }}>& Co.</span>
          </span>
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
