
export default function WhyUs() {
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
      desc: 'Actuamos como un ala estratégica interna de su organización.\nBrindamos respuestas ágiles, adaptadas a su cultura y a su presupuesto.'
    },
    {
      title: 'Modelo Integral',
      desc: 'Modelo de negocio altamente adaptable que nos permite ingresar con éxito a sectores con diferentes dinámicas laborales.'
    }
  ];

  return (
    <section id="como-elegir" className="section-padding why-us-section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-content">
            <div className="why-us-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.2rem', lineHeight: '1.25' }}>BALUARTALENT & Co. | Por qué elegir el enfoque.</h2>
              <p style={{ maxWidth: '800px', margin: '1rem auto 2.5rem auto', color: 'var(--text-muted)' }}>
                Es momento de transformar la administración del talento en una ventaja competitiva.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span className="section-subtitle">NUESTRA PROMESA DE VALOR</span>
              </div>
            </div>

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
                    <p style={{ whiteSpace: 'pre-line' }}>{razon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
