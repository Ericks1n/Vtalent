import React from 'react';

export default function Footer({ onOpenContact }) {
  return (
    <footer>
      <div className="container">
        
        {/* Footer Top WhatsApp Banner */}
        <div className="footer-top">
          <h3>¿Necesitas asesoría en Recursos Humanos? Estamos para ayudarte.</h3>
          <a href="https://wa.me/593999999999?text=Hola%20BALUARTALENT%20%26%20Co.,%20quisiera%20saber%20más%20sobre%20sus%20servicios%20de%20RRHH" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: 'currentColor' }}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Conversemos por WhatsApp
          </a>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand & Description */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--secondary)" />
                  </linearGradient>
                </defs>
                <path d="M20 15L50 75L80 15H60L50 50L40 15H20Z" fill="url(#footer-logo-grad)" />
                <path d="M40 15L50 38L60 15H80L50 85L20 15H40Z" fill="url(#footer-logo-grad)" opacity="0.8" />
              </svg>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-heading)', letterSpacing: '-0.03em' }}>
                BALUARTALENT<span style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '600', marginLeft: '0.2rem' }}>& Co.</span>
              </span>
            </div>
            <p>
              BALUARTALENT & Co. Consultoría Integral es la consultora de Recursos Humanos de referencia en Quito, Ecuador. Potenciamos la productividad y el clima laboral de tu organización con soluciones a la medida.
            </p>
            <div className="social-links">
              {/* Facebook */}
              <a href="https://facebook.com/Baluartalent" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/Baluartalent" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/baluartalent" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@baluartalent" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="footer-column">
            <h4>Enlaces</h4>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#como-elegir">Por Qué Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Reclutamiento y Selección</a></li>
              <li><a href="#servicios">Outsourcing de Nómina</a></li>
              <li><a href="#servicios">Clima y Desempeño</a></li>
              <li><a href="#servicios">Capacitación y Desarrollo</a></li>
              <li><a href="#servicios">Consultoría de Talento</a></li>
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div className="footer-column">
            <h4>Alianzas y Afiliaciones</h4>
            <div className="legal-badge" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{
                background: 'rgba(30, 64, 175, 0.05)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '0.6rem 0.8rem',
                fontSize: '0.85rem',
                color: 'var(--text-main)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: '100%'
              }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }}></span>
                Miembro Activo CCQ
              </div>
              <div style={{
                background: 'rgba(30, 64, 175, 0.05)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '0.6rem 0.8rem',
                fontSize: '0.85rem',
                color: 'var(--text-main)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: '100%'
              }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></span>
                Red Talento Ecuador
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="footer-bottom">
          <p>© 2026 BALUARTALENT & Co. Consultoría Integral. Todos los derechos reservados. Quito, Ecuador.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#privacidad" style={{ color: 'var(--text-muted)' }}>Política de Privacidad</a>
            <span style={{ color: 'var(--border-light)' }}>|</span>
            <a href="#terminos" style={{ color: 'var(--text-muted)' }}>Términos y Condiciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
