import React from 'react';

export default function GestionNomina() {
  const PILLARS = [
    {
      num: '01',
      title: 'Procesamiento de Nómina con Cero Errores',
      desc: 'Cálculo exacto de sueldos, horas extraordinarias, suplementarias, bonificaciones, comisiones y descuentos de ley. Eliminamos fallas en el procesamiento periódico de su nómina.',
      colorClass: 'node-teal',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Cumplimiento Legal e Institucional (IESS / MDT)',
      desc: 'Gestión completa de aportes al IESS, avisos de entrada y salida, planillas, décimos (3ro y 4to sueldo), utilidades y declaraciones requeridas ante el Ministerio del Trabajo.',
      colorClass: 'node-blue',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Liquidaciones y Finiquitos Oportunos',
      desc: 'Elaboración y verificación técnica de actas de finiquito, cálculo de indemnizaciones y desahucios asegurando el sustento legal y la tranquilidad contractual.',
      colorClass: 'node-indigo',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Reportes y Analítica Financiera de Personal',
      desc: 'Informes detallados y distribuciones de costo por centro de costo o departamento para la toma de decisiones estratégicas de la alta dirección.',
      colorClass: 'node-amber',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
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
            <a href="#">Inicio</a> &gt; <span className="current">Gestión de Nómina - Payroll</span>
          </div>
          <h1>GESTIÓN DE NÓMINA - PAYROLL</h1>
          <p className="subpage-subtitle">Propuesta de Valor y Administración Integral del Personal</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '4rem', maxWidth: '900px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Garantía de Precisión, Puntualidad y Eficiencia Operativa</h2>
            <p className="lead-text" style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center', fontSize: '1.15rem', fontWeight: '500', lineHeight: '1.7' }}>
              En <strong>BALUARTALENT & Co.</strong> transformamos la administración de nómina en un proceso seguro, transparente y sin fricciones. Asumimos el procesamiento integral de su plantilla para que su gerencia se concentre en el núcleo de su negocio, eliminando contingencias legales y errores financieros.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="timeline-container">
            <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {PILLARS.map((pillar, index) => (
                <div key={index} className="timeline-node">
                  <div className={`node-circle ${pillar.colorClass}`}>
                    {pillar.num}
                  </div>
                  <div className="node-card" style={{ height: '100%' }}>
                    <div className="node-icon-wrapper" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: '#38bdf8' }}>
                      {pillar.icon}
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits Highlight */}
          <div style={{ marginTop: '5rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '3rem 2rem', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#ffffff', textAlign: 'center' }}>¿Por qué externalizar la nómina con BALUARTALENT?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>🔒 Confidencialidad Absoluta</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Protegemos la información salarial sensible de la empresa bajo estrictos protocolos de ciberseguridad y confidencialidad.</p>
              </div>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>⏱️ Ahorro de Tiempo y Costos</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Reducimos la carga operativa interna y los costos asociados al software, capacitación y mantenimiento de nómina.</p>
              </div>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>⚖️ Tranquilidad Legal</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Actualizaciones continuas conforme a cambios en el Código del Trabajo y regulaciones del IESS o SRI.</p>
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
