import React from 'react';

export default function PlanDeAccion() {
  const FASES = [
    {
      num: '01',
      title: 'INVESTIGACIÓN',
      desc: 'Levantamiento de información inicial mediante entrevistas con líderes, encuestas y revisión de procesos actuales de Talento Humano.',
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
      title: 'DESARROLLO',
      desc: 'Diseño a la medida de las herramientas, manuales, perfiles de cargo, planes de capacitación o estrategias de retención necesarias.',
      colorClass: 'node-blue',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      )
    },
    {
      num: '03',
      title: 'IMPLEMENTACIÓN',
      desc: 'Despliegue de las soluciones diseñadas en la organización. Incluye la capacitación al personal, ejecución de evaluaciones o reclutamiento de perfiles.',
      colorClass: 'node-indigo',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        </svg>
      )
    },
    {
      num: '04',
      title: 'RESULTADO',
      desc: 'Medición del impacto real de la consultoría frente a la situación inicial detectada en el diagnóstico. Informe final de gestión y recomendaciones para la sostenibilidad del proyecto.',
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
            <a href="#">Inicio</a> &gt; <span className="current">Plan de Acción</span>
          </div>
          <h1>PLAN DE ACCIÓN</h1>
          <p className="subpage-subtitle">Metodología de Consultoría: Paso a Paso</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '5rem', maxWidth: '900px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Metodología de Consultoría: Paso a Paso</h2>
            <p className="lead-text" style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center', fontSize: '1.2rem', fontWeight: '500', lineHeight: '1.7' }}>
              Para presentar su metodología de trabajo de forma comercial y profesional, BALUARTALENT & Co. realiza el proceso de consultoría en una estructura de cuatro fases consecutivas.
            </p>
          </div>

          {/* Action Plan Stepper */}
          <div className="action-plan-stepper">
            {FASES.map((fase, index) => (
              <div key={index} className="action-step-card">
                <div className="action-step-header">
                  <span className="action-step-badge">Fase {fase.num}</span>
                  <div className="action-step-icon">
                    {fase.icon}
                  </div>
                </div>
                <h3>{fase.title}</h3>
                <p>{fase.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '6rem', textAlign: 'center' }}>
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
