import React from 'react';

export default function PorQueElegirnos() {
  const RAZONES = [
    {
      title: 'Blindaje Legal',
      desc: 'Cero contingencias en procesos de nómina y obligaciones patronales.'
    },
    {
      title: 'Estructura Técnica',
      desc: 'Programas de formación diseñados para resultados medibles.'
    },
    {
      title: 'Criterio Senior',
      desc: 'Respaldamos cada decisión con rigor y ética profesional.'
    },
    {
      title: 'Consultoría de Cercanía',
      desc: 'Actuamos como un ala estratégica interna de su organización. Brindamos respuestas ágiles, adaptadas a su cultura y a su presupuesto.'
    },
    {
      title: 'Modelo Integral',
      desc: 'Modelo de negocio altamente adaptable que nos permite ingresar con éxito a sectores con diferentes dinámicas laborales.'
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
            <a href="#">Inicio</a> &gt; <span className="current">Por Qué Elegirnos</span>
          </div>
          <h1>Por Qué Elegirnos</h1>
          <p className="subpage-subtitle">El enfoque estratégico y la solidez de BALUARTALENT & Co.</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <h2>POR QUÉ ELEGIR EL ENFOQUE DE BALUARTALENT</h2>
              <p className="lead-text" style={{ margin: '1.5rem 0 2.5rem 0' }}>
                Es momento de transformar la administración del talento en una ventaja competitiva. Bienvenidos a la solidez de BALUARTALENT & Co.
              </p>
              
              <h3 style={{ marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-heading)', fontSize: '1.3rem' }}>
                NUESTRA PROMESA DE VALOR
              </h3>
              
              <div className="reasons-list">
                {RAZONES.map((razon, index) => (
                  <div key={index} className="reason-item">
                    <div className="reason-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="reason-info">
                      <h4>{razon.title}</h4>
                      <p>{razon.desc}</p>
                    </div>
                  </div>
                ))}
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

            <div className="why-us-decor">
              <div className="glass-card decor-box">
                <h3>Asesoría Inmediata</h3>
                <p>Nuestros expertos están listos para guiar la transformación de tu área de talento.</p>
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="mailto:info@baluartalent.com" style={{ fontWeight: '600', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    info@baluartalent.com
                  </a>
                  <a href="tel:+59323617038" style={{ fontWeight: '600', color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Telf: (+593) 2 3617038
                  </a>
                  <a href="tel:+593999452676" style={{ fontWeight: '600', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    Cel: 0999452676
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
