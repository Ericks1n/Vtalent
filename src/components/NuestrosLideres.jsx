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
              <div className="leader-image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="leader-info">
                <h3>[Nombre del Líder 1]</h3>
                <span className="leader-role">Director General</span>
                <p className="leader-bio">
                  Especialista en consultoría organizacional y gestión del cambio con más de 15 años liderando procesos de recursos humanos en la región.
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
                <p className="leader-bio">
                  Especialista en Talento Humano, experta en la automatización y optimización de los subsistemas de RR.HH.
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
                <p className="leader-bio">
                  Especialista en Desarrollo Organizacional, Capacitación Estratégica, Educación continua y Gestión del cambio cultural.
                </p>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="leader-card">
              <div style={{ width: '100%', height: '250px', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
                <img 
                  src="/erick_paillacho.png" 
                  alt="Erick Paillacho - Ing. Tecnología" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                />
              </div>
              <div className="leader-info">
                <h3>Erick Paillacho</h3>
                <span className="leader-role">Ing. Tecnología</span>
                <p className="leader-bio">
                  Asesor en Optimización de Datos enfocado en eficiencia y rendimiento analítico. Experto en transformar datos crudos en arquitecturas limpias y rápidas.
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
