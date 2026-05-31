import React from 'react';

export default function QuienesSomos() {
  return (
    <div className="subpage-wrapper">
      {/* Page Header Banner */}
      <header className="subpage-header">
        <div className="bg-blob blob-purple" style={{ top: '-10%', right: '10%' }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-10%', left: '10%' }}></div>
        
        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Quiénes Somos</span>
          </div>
          <h1>Quiénes Somos</h1>
          <p className="subpage-subtitle">Conoce nuestra trayectoria y compromiso con el talento humano</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="about-detailed-grid">
            <div className="about-detailed-text">
              <h2>Bienvenido a la gestión de Talento de la nueva generación.</h2>
              <p className="lead-text">
                Baluartalent & Co. ofrece consultoría integral en Talento Humano.
              </p>
              <p>
                En Baluartalent & Co. entendemos que el éxito empresarial se fundamenta en las personas. 
                Somos una firma consultora integral especializada en Talento Humano. Alineamos su capital 
                humano con los objetivos del negocio para transformar la gestión de recursos humanos en una 
                ventaja competitiva sostenible, asegurando innovación y resultados medibles.
              </p>
              
              <div className="content-features" style={{ marginTop: '2rem' }}>
                <div className="feature-card">
                  <h4>Propósito Claro</h4>
                  <p>Facilitar el crecimiento sostenible de las empresas a través del desarrollo de sus colaboradores.</p>
                </div>
                <div className="feature-card">
                  <h4>Metodología Innovadora</h4>
                  <p>Combinamos experiencia de campo con herramientas digitales para una selección y gestión ágil.</p>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <a href="#" className="btn btn-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  Volver al Inicio
                </a>
              </div>
            </div>

            <div className="about-detailed-visual">
              <div className="visual-card">
                <img src="/about_talent.png" alt="Quiénes Somos" className="featured-image" />
                <div className="glass-card overlay-stats">
                  <span className="stats-number">100%</span>
                  <span className="stats-label">Compromiso Local en Ecuador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
