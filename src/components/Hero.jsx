import React from 'react';

export default function Hero({ onOpenContact }) {
  return (
    <header className="hero">
      {/* Decorative Blur Blobs */}
      <div className="bg-blob blob-purple"></div>
      <div className="bg-blob blob-cyan"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="subtitle">Consultores de Talento Humano en Quito</span>
          <h1>SU ALIADO ESTRATÉGICO, EL BALUARTE DE SU TALENTO</h1>
          <p>
            En BALUARTALENT & Co. ayudamos a las empresas a crecer seleccionando, capacitando y potenciando a sus equipos de trabajo. Tu socio estratégico en Recursos Humanos.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={onOpenContact}>
              ¡Agenda una asesoría!
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <a href="#servicios" className="btn btn-secondary">
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src="/hero_recruitment.png" 
            alt="BALUARTALENT & Co. Consultores de Recursos Humanos en Quito" 
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
