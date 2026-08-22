import React from 'react';

export default function CapacitacionCorporativa() {
  const COURSES_GRID = [
    {
      num: '01',
      title: 'Diagnóstico de Necesidades de Formación (DNC)',
      desc: 'Evaluación inicial profunda de las brechas de rendimiento y competencias en su equipo para diseñar planes formativos orientados a resultados medibles.',
      colorClass: 'node-teal',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Programas In-Company y Formación Virtual',
      desc: 'Talleres, seminarios y programas interactivos adaptados al sector y cultura organizativa de su empresa, impartidos por facilitadores expertos.',
      colorClass: 'node-blue',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Liderazgo, Cultura y Habilidades Blandas',
      desc: 'Desarrollo de competencias de comunicación asertiva, resolución de conflictos, trabajo en equipo, inteligencia emocional y gestión del cambio.',
      colorClass: 'node-indigo',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Evaluación del Impacto y Certificación',
      desc: 'Medición posterior de la aplicación práctica de lo aprendido y entrega de certificaciones corporativas respaldadas por BALUARTALENT.',
      colorClass: 'node-amber',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    }
  ];

  return (
    <div className="subpage-wrapper">
      {/* Page Header Banner */}
      <header className="subpage-header">
        <div className="bg-blob blob-purple" style={{ top: '-10%', right: '10%' }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-10%', left: '10%' }}></div>
        
        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Capacitación Corporativa</span>
          </div>
          <h1>CAPACITACIÓN CORPORATIVA</h1>
          <p className="subpage-subtitle">Desarrollo de Competencias Clave e Impulso al Desempeño Organizacional</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '4rem', maxWidth: '900px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Formación Estratégica Adaptada a los Retos de su Empresa</h2>
            <p className="lead-text" style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center', fontSize: '1.15rem', fontWeight: '500', lineHeight: '1.7' }}>
              En <strong>BALUARTALENT & Co.</strong> creamos experiencias de aprendizaje transformadoras que elevan las capacidades de su equipo humano. Desarrollamos programas formativos prácticos, innovadores y directamente alineados con las metas de negocio.
            </p>
          </div>

          {/* Modular Learning Tracks Container */}
          <div className="training-tracks-container">
            {COURSES_GRID.map((item, index) => (
              <div key={index} className="training-track-row">
                <div className="training-track-number-col">
                  <span className="training-track-num">{item.num}</span>
                  <span className="training-track-tag">Fase</span>
                </div>
                <div className="training-track-body">
                  <div className="training-track-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="training-track-icon">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Training Pillars Showcase */}
          <div className="training-pillars-showcase">
            <h3>Módulos Destacados de Capacitación</h3>
            <div className="training-pillars-grid">
              <div className="training-pillar-card">
                <h4>🎯 Gestión del Talento Humano</h4>
                <p>Evaluación del desempeño, retención de talento, clima laboral y modelos de competencias organizacionales.</p>
              </div>
              <div className="training-pillar-card">
                <h4>🛡️ Seguridad y Salud Ocupacional</h4>
                <p>Prevención de riesgos laborales, comités paritarios, normativas MDT/IESS y programas de salud psicosocial.</p>
              </div>
              <div className="training-pillar-card">
                <h4>📈 Marketing, Ventas y Servicio</h4>
                <p>Técnicas de negociación, servicio al cliente de excelencia y efectividad comercial omnicanal.</p>
              </div>
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
