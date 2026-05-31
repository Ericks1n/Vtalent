import React from 'react';

const SERVICES_DATA = [
  {
    title: 'GESTIÓN DE NÓMINA (PAYROLL OUTSOURCING)',
    description: 'Blindamos su operación frente a riesgos legales y administrativos. Procesamiento de nómina bajo normativa IESS, MDT y SRI.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: 'CAPACITACIÓN TÉCNICA ESPECIALIZADA',
    description: 'Elevamos el estándar de competencia de sus equipos. Capacitación a medida basada en KPIs organizacionales.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
      </svg>
    )
  },
  {
    title: 'SALUD OCUPACIONAL',
    description: 'Programa Integral de Prevención de Riesgos Psicosociales. Cumplimiento normativo y diagnóstico de salud organizacional.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    )
  },
  {
    title: 'SEGURIDAD INDUSTRIAL',
    description: 'Asegurar el cumplimiento estricto del 100% de las normativas del MDT, IESS y reglamentos de Higiene y Seguridad Ocupacional.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="services-header">
          <span className="section-subtitle" style={{ marginBottom: '1.5rem' }}>NUESTROS SERVICIOS</span>
          <h2>BALUARTALENT & Co. | Estructura sólida para su talento.</h2>
          <p>
            Soluciones precisas en gestión laboral y formación.
          </p>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="service-card">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto' }}>
                  {service.icon}
                </div>
              </div>
              <h3 style={{ textAlign: 'center', fontSize: '1.2rem', minHeight: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{service.title}</h3>
              <p style={{ textAlign: 'center', marginTop: '0.8rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
