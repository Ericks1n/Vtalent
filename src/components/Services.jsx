import React from 'react';

const SERVICES_DATA = [
  {
    title: 'Selección y Reclutamiento',
    description: 'Encontramos los profesionales ideales para tu empresa en Quito y todo el Ecuador, evaluando aptitudes técnicas y ajuste cultural.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <path d="M11 8a3 3 0 0 0-3 3"></path>
      </svg>
    )
  },
  {
    title: 'Outsourcing de Nómina',
    description: 'Gestión oportuna del pago de nómina, cálculo de beneficios de ley (IESS, décimos) y cumplimiento legal laboral en Ecuador.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: 'Clima y Desempeño Laboral',
    description: 'Evaluaciones integrales y diagnósticos organizacionales para mejorar el compromiso, la motivación y la productividad de tu equipo.',
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
    title: 'Capacitación y Desarrollo',
    description: 'Programas formativos a la medida en liderazgo, comunicación asertiva y competencias clave para el crecimiento de tu personal.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )
  },
  {
    title: 'Consultoría de Talento',
    description: 'Asesoría experta en estructuración organizacional, diseño de perfiles de puestos y optimización de procesos de Recursos Humanos.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  },
  {
    title: 'Headhunting / Ejecutivos',
    description: 'Búsqueda especializada y confidencial de líderes, directivos y perfiles de alta complejidad técnica y estratégica.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="services-header">
          <h2>Soluciones de Recursos Humanos a tu medida</h2>
          <p>
            Nuestros servicios de consultoría y gestión del talento están diseñados de acuerdo a las necesidades y expectativas de cada empresa en el mercado ecuatoriano.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="service-card">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto' }}>
                  {service.icon}
                </div>
              </div>
              <h3 style={{ textAlign: 'center' }}>{service.title}</h3>
              <p style={{ textAlign: 'center', marginTop: '0.8rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
