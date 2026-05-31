import React from 'react';

export default function MisionVision() {
  return (
    <div className="subpage-wrapper">
      {/* Page Header Banner */}
      <header className="subpage-header">
        <div className="bg-blob blob-purple" style={{ top: '-10%', right: '10%' }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-10%', left: '10%' }}></div>
        
        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Misión y Visión</span>
          </div>
          <h1>Misión y Visión</h1>
          <p className="subpage-subtitle">Nuestra razón de ser y el camino hacia el que nos proyectamos</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="mision-vision-grid">
            {/* Mision */}
            <div className="mision-vision-card">
              <div className="card-icon-wrapper" style={{ background: 'rgba(30, 64, 175, 0.1)', color: 'var(--primary)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h2>Nuestra Misión</h2>
              <p className="lead-text" style={{ margin: '1.5rem 0 0 0' }}>
                Impulsar el éxito de las organizaciones potenciando el desarrollo y la estrategia de su talento humano. Conectando estrategias de negocio con el potencial de las personas.
              </p>
            </div>

            {/* Vision */}
            <div className="mision-vision-card">
              <div className="card-icon-wrapper" style={{ background: 'rgba(13, 148, 136, 0.1)', color: 'var(--secondary)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h2>Nuestra Visión</h2>
              <p className="lead-text" style={{ margin: '1.5rem 0 0 0', color: 'var(--secondary)' }}>
                Ser la consultora referente en gestión de talento, reconocida por su innovación y soluciones humanas de alto impacto, destacándonos por la innovación tecnológica y la excelencia de nuestros servicios.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <a href="#" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              Volver al Inicio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
