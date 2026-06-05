export default function ModeloDesarrollo() {
  const FASES = [
    {
      num: '01',
      title: 'INVESTIGACIÓN',
      desc: 'Levantamiento de información interna con rigor analítico',
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
      desc: 'Diseño de soluciones estratégicas personalizadas',
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
      title: 'EJECUCIÓN',
      desc: 'Implementación y puesta en marcha de las soluciones',
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
      title: 'MEDICIÓN',
      desc: 'Evaluación precisa del impacto en el negocio',
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
            <a href="#">Inicio</a> &gt; <span className="current">Modelo de Desarrollo</span>
          </div>
          <h1>MODELO DE DESARROLLO</h1>
          <p className="subpage-subtitle">Nuestra Metodología de Trabajo</p>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: '5rem', maxWidth: '900px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>Metodología de Consultoría a la Medida</h2>
            <p className="lead-text" style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center', fontSize: '1.2rem', fontWeight: '500', lineHeight: '1.7' }}>
              BALUARTALENT & Co. estructura su modelo de desarrollo en cuatro fases de ejecución integrales, garantizando calidad, orden y efectividad en cada intervención organizacional.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-grid">
              {FASES.map((fase, index) => (
                <div key={index} className="timeline-node">
                  <div className={`node-circle ${fase.colorClass}`}>
                    {fase.num}
                  </div>
                  <div className="node-card">
                    <div className="node-icon-wrapper" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                      {fase.icon}
                    </div>
                    <h3>{fase.title}</h3>
                    <p>{fase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slogan Banner */}
          <div className="slogan-banner" style={{
            marginTop: '6rem',
            padding: '2.5rem 2rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.06) 0%, rgba(13, 148, 136, 0.06) 100%)',
            border: '1px solid var(--border-light)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <p style={{
              fontSize: '1.45rem',
              fontWeight: '700',
              color: 'var(--primary)',
              margin: 0,
              fontFamily: 'var(--font-heading)',
              textAlign: 'center',
              letterSpacing: '-0.01em',
              lineHeight: '1.4'
            }}>
              "Enfoque 100 % personalizado orientado a resultados medibles"
            </p>
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
