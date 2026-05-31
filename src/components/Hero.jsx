import React from 'react';

export default function Hero({ onOpenContact }) {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="subtitle">Consultores de Talento Humano</span>
          <h1>
            <span className="hero-title-line">SU ALIADO ESTRATÉGICO,</span>
            <span className="hero-title-line">EL BALUARTE DE SU TALENTO</span>
          </h1>
          <p>
            BALUARTALENT & Co. ofrece consultoría integral en Talento Humano.
          </p>
          <p>
            En BALUARTALENT & Co. entendemos que el éxito empresarial se fundamenta en las personas. Somos una firma consultora integral especializada en Talento Humano. Alineamos su capital humano con los objetivos del negocio para transformar la gestión de recursos humanos en una ventaja competitiva sostenible, asegurando innovación y resultados medibles.
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
      </div>
    </header>
  );
}
