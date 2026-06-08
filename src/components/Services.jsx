const SERVICES_DATA = [
  {
    title: 'Gestión del Talento Humano',
    bullets: [
      'Reclutamiento y selección',
      'Evaluación del desempeño',
      'Planes de carrera y retención'
    ],
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
    title: 'Seguridad y Salud Ocupacional',
    bullets: [
      'Prevención de riesgos laborales',
      'Normativas legales y comités',
      'Riesgos psicosociales'
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: 'Marketing, Ventas y Servicio',
    bullets: [
      'Marketing digital y marca',
      'Técnicas de negociación',
      'Excelencia en servicio'
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    )
  },
  {
    title: 'Desarrollo Organizacional',
    bullets: [
      'Planificación estratégica',
      'Cultura y valores',
      'Gestión del cambio'
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.93 5.93l2.12 2.12M15.95 15.95l2.12 2.12M5.93 18.07l2.12-2.12M15.95 8.05l2.12-2.12"></path>
      </svg>
    )
  },
  {
    title: 'Asesorías Especializadas',
    bullets: [
      'Diagnóstico empresarial',
      'Decisiones estratégicas',
      'Mentoría ejecutiva'
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="programas" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="services-header">
          <span id="programas-capacitacion" className="section-subtitle" style={{ marginBottom: '1.5rem' }}>PROGRAMAS DE CAPACITACIÓN</span>
          <h2>BALUARTALENT & Co. | Programas de formación y especialización profesional.</h2>
          <p>
            Soluciones formativas de alto impacto diseñadas para elevar la competitividad de sus equipos de trabajo.
          </p>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', justifyContent: 'center' }}>
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="service-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto' }}>
                  {service.icon}
                </div>
              </div>
              <h3 style={{ textAlign: 'center', fontSize: '1.25rem', minHeight: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-heading)', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%', alignItems: 'flex-start', maxWidth: '240px' }}>
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)', textAlign: 'left', fontWeight: '500' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(13, 148, 136, 0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
