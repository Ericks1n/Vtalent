import React from 'react';

export default function Footer({ onOpenContact }) {
  return (
    <footer>
      <div className="container">
        
        {/* Footer Top WhatsApp Banner */}
        <div id="footer-contacto" className="footer-top">
          <h3>¿Necesitas asesoría en Recursos Humanos? Estamos para ayudarte.</h3>
          <a href="https://wa.me/593984626222?text=Hola%20BALUARTALENT%20%26%20Co.,%20quisiera%20saber%20más%20sobre%20sus%20servicios%20de%20RRHH" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="BALUARTALENT & Co." style={{ height: '52px', objectFit: 'contain' }} />
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
              <li><a href="#nosotros">Por Qué Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#footer-contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Gestión de Nómina</a></li>
              <li><a href="#servicios">Capacitación Técnica</a></li>
              <li><a href="#servicios">Salud Ocupacional</a></li>
              <li><a href="#servicios">Seguridad Industrial</a></li>
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div className="footer-column">
            <h4>Contacto y Ubicación</h4>
            <ul className="footer-links" style={{ gap: '1rem', marginTop: '1.2rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem', color: 'var(--primary)' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>
                  Av. Naciones Unidas E2-30 - entre Iñaquito y Núñez de Vela. Ed. METROPOLITAN, Piso 4, Off. 413.<br/>Quito - Ecuador
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--secondary)' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Teléf: <a href="tel:+59323617038" style={{ color: 'inherit', fontWeight: '500' }}>(+593) 2 3617038</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--primary)' }}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <span>Celular: <a href="tel:+593999452676" style={{ color: 'inherit', fontWeight: '500' }}>0999452676</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: '#25D366' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>WhatsApp: <a href="https://wa.me/593984626222" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: '600' }}>0984626222</a></span>
              </li>
            </ul>
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
