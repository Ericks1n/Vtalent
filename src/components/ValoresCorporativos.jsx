import React from 'react';

export default function ValoresCorporativos() {
  const VALORES = [
    {
      title: 'Integridad',
      description: 'Actuamos con total transparencia, ética y confidencialidad en la gestión del recurso más valioso de las empresas.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'Excelencia Estratégica',
      description: 'Buscamos la máxima calidad y precisión, alineando las soluciones de talento con los objetivos de negocio de cada cliente.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      title: 'Innovación Humana',
      description: 'Adoptamos metodologías modernas y tecnológicas sin perder la empatía ni el enfoque cercano con las personas.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M12 2v2"></path>
          <path d="M12 18v2"></path>
          <path d="M4.93 4.93l1.41 1.41"></path>
          <path d="M17.66 17.66l1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="M6.34 17.66l-1.41 1.41"></path>
          <path d="M19.07 4.93l-1.41 1.41"></path>
        </svg>
      )
    },
    {
      title: 'Compromiso con el Desarrollo',
      description: 'Impulsamos el crecimiento continuo, el bienestar y la evolución del potencial de los colaboradores.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Sólida Alianza (Baluarte)',
      description: 'Nos convertimos en el pilar de apoyo y el socio estratégico confiable para la protección y el éxito organizacional.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="20" y2="21"></line>
          <line x1="4" y1="3" x2="20" y2="3"></line>
          <line x1="6" y1="3" x2="6" y2="21"></line>
          <line x1="12" y1="3" x2="12" y2="21"></line>
          <line x1="18" y1="3" x2="18" y2="21"></line>
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
            <a href="#">Inicio</a> &gt; <span className="current">Valores Corporativos</span>
          </div>
          <h1>Valores Corporativos</h1>
          <p className="subpage-subtitle">Los principios fundamentales que rigen nuestras acciones y decisiones</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '4rem', maxWidth: '800px' }}>
            <h2>Nuestra Cultura Organizacional</h2>
            <p className="lead-text" style={{ color: 'var(--text-muted)' }}>
              En Baluartalent & Co. nos guían principios sólidos que definen nuestra forma de trabajar y el compromiso que asumimos con cada organización y profesional.
            </p>
          </div>

          <div className="valores-grid">
            {VALORES.map((valor, index) => (
              <div key={index} className="valor-card">
                <div className="valor-icon-box">
                  {valor.icon}
                </div>
                <h3>{valor.title}</h3>
                <p>{valor.description}</p>
              </div>
            ))}
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
