import React from 'react';

export default function AsesoriaJuridica() {
  const SERVICES_LIST = [
    {
      num: '01',
      title: 'Auditoría Legal Laboral y Diagnóstico',
      desc: 'Revisión exhaustiva de contratos, expedientes de personal, reglamentos internos y cumplimiento de obligaciones laborales vigentes para identificar brechas de riesgo.',
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
      title: 'Mitigación y Blindaje de Riesgos Legales',
      desc: 'Diseño de estrategias preventivas para minimizar demandas, multas e inspecciones de trabajo por parte de los organismos de control estatal.',
      colorClass: 'node-blue',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Elaboración y Estructuración de Contratos',
      desc: 'Redacción a medida de contratos individuales y colectivos, convenios de confidencialidad, no competencia y cláusulas especiales según la naturaleza del negocio.',
      colorClass: 'node-indigo',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Reglamentos Internos y Protocolos de Convivencia',
      desc: 'Elaboración, aprobación y legalización del Reglamento Interno de Trabajo, Reglamento de Higiene y Seguridad, y protocolos para la prevención del acoso laboral.',
      colorClass: 'node-amber',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
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
            <a href="#">Inicio</a> &gt; <span className="current">Asesoría Jurídica y Legal</span>
          </div>
          <h1>ASESORÍA JURÍDICA Y LEGAL</h1>
          <p className="subpage-subtitle">Protección Legal Corporativa y Gestión Preventiva de Relaciones Laborales</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '4rem', maxWidth: '900px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Blindaje Corporativo y Respaldo Experto</h2>
            <p className="lead-text" style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center', fontSize: '1.15rem', fontWeight: '500', lineHeight: '1.7' }}>
              En <strong>BALUARTALENT & Co.</strong> brindamos asesoría jurídico-laboral estratégica diseñada para proteger los intereses corporativos de su empresa, garantizando que cada decisión en materia de talento humano cuente con un sólido marco de seguridad jurídica.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="timeline-container">
            <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {SERVICES_LIST.map((item, index) => (
                <div key={index} className="timeline-node">
                  <div className={`node-circle ${item.colorClass}`}>
                    {item.num}
                  </div>
                  <div className="node-card" style={{ height: '100%' }}>
                    <div className="node-icon-wrapper" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: '#38bdf8' }}>
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Differentiators */}
          <div style={{ marginTop: '5rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '3rem 2rem', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#ffffff', textAlign: 'center' }}>Propuesta de Valor Legal</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>⚖️ Enfoque Preventivo</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Anticipamos y solucionamos conflictos laborales antes de que se conviertan en litigios costosos para la empresa.</p>
              </div>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>📄 Rigor Técnico y Normativo</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Alineación estricta al Código del Trabajo, mandatos constitucionales y acuerdos del Ministerio del Trabajo.</p>
              </div>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>🤝 Acompañamiento Continuo</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Soporte consultivo oportuno en la toma de decisiones complejas respecto a personal y desvinculaciones.</p>
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
