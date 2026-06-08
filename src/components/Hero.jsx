export default function Hero() {
  const CARDS_DATA = [
    {
      title: "Mitigación de Riesgos Legales",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "Retención Eficiente de Talento",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    {
      title: "Culturas de Alto Desempeño",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <header className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="subtitle">PROPUESTA DE CONSULTORÍA INTEGRAL</span>
          <h1>
            <span className="hero-title-line">BALUARTALENT</span>
          </h1>
          <div className="hero-slogan">
            Su aliado estratégico, el baluarte de su talento
          </div>
          <p>
            Somos una firma de consultoría integral especializada en talento humano. Ayudamos a las organizaciones a convertir la gestión de personas en una ventaja competitiva sostenible, con impacto directo en productividad, cultura y resultados de negocio.
          </p>

          <div className="hero-features-grid">
            {CARDS_DATA.map((card, index) => (
              <div key={index} className="hero-feature-card">
                <div className="card-icon">
                  {card.icon}
                </div>
                <h4>{card.title}</h4>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#programas-capacitacion" className="btn btn-primary" style={{ boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)' }}>
              Ver Programas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right column left empty to showcase the building in the background image */}
        <div className="hero-spacer" aria-hidden="true"></div>
      </div>
    </header>
  );
}
