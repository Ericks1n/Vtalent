export default function Hero() {
  const CARDS_DATA = [
    {
      title: "Gestión de nómina - Payroll",
      link: "#/gestion-de-nomina",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      title: "Asesoría Jurídica y Legal",
      link: "#/asesoria-juridica-legal",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "Capacitación Corporativa",
      link: "#/capacitacion-corporativa",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
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
              <a key={index} href={card.link} className="hero-feature-card">
                <div className="card-icon">
                  {card.icon}
                </div>
                <h4>{card.title}</h4>
              </a>
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
