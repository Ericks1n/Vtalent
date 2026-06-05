import React from 'react';

export default function NuestrosLideres() {
  return (
    <div className="subpage-wrapper">
      {/* Page Header Banner */}
      <header className="subpage-header">
        <div className="bg-blob blob-purple" style={{ top: '-10%', right: '10%' }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-10%', left: '10%' }}></div>
        
        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Nuestros Líderes</span>
          </div>
          <h1>Nuestros Líderes</h1>
          <p className="subpage-subtitle">El equipo de profesionales y expertos que guía a BALUARTALENT & Co.</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '4rem', maxWidth: '800px' }}>
            <h2>Nuestra Dirección Estratégica</h2>
            <p className="lead-text" style={{ color: 'var(--text-muted)' }}>
              El equipo de Baluartalent & Co. está integrado por profesionales especializados en Dirección Estratégica de Recursos Humanos, Psicología Organizacional, Educación Continua y Legislación Laboral. Con más de 15 años de trayectoria corporativa liderando áreas de Talento Humano en sectores multisectoriales, combinan la visión del negocio con metodologías ágiles para blindar y potenciar su capital humano.
            </p>
          </div>

          <div className="leaders-grid">
            {/* Leader 1 */}
            <div className="leader-card">
              <div style={{ width: '100%', height: '250px', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
                <img 
                  src="/hector_cevallos.png" 
                  alt="Hector Cevallos - Asesor Jurídico" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} 
                />
              </div>
              <div className="leader-info">
                <h3>Hector Cevallos</h3>
                <span className="leader-role">Asesor Jurídico</span>
                <span className="leader-subtitle">Abogado en Derecho Laboral y Seguridad Social</span>
                <p className="leader-bio">
                  +20 años de experiencia en litigio, consultoría estratégica y representación jurídica integral en el área procesal y Derecho Laboral
                </p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="leader-card">
              <div style={{ width: '100%', height: '250px', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
                <img 
                  src="/mabel_ramos.png" 
                  alt="Mabel Ramos - Mg. Talento Humano" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} 
                />
              </div>
              <div className="leader-info">
                <h3>Mabel Ramos</h3>
                <span className="leader-role">Mg. Talento Humano</span>
                <span className="leader-subtitle">Especialista en Subsistemas de RR.HH.</span>
                <p className="leader-bio">
                  Experta en la automatización y optimización de los subsistemas y procesos de talento humano.
                </p>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="leader-card">
              <div style={{ width: '100%', height: '250px', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
                <img 
                  src="/jorge_macias.png" 
                  alt="Jorge Macias - Mg. Talento Humano" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} 
                />
              </div>
              <div className="leader-info">
                <h3>Jorge Macias</h3>
                <span className="leader-role">Mg. Talento Humano</span>
                <span className="leader-subtitle">Especialista en Desarrollo Organizacional</span>
                <p className="leader-bio">
                  Experto en capacitación estratégica, educación continua y gestión del cambio cultural.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
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
