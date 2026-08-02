
export default function AreasDesarrollo() {
  return (
    <section id="areas-desarrollo" className="section-padding areas-desarrollo-section" style={{ position: 'relative' }}>
      {/* Background blobs for visual appeal */}
      <div className="bg-blob blob-purple" style={{ top: '10%', right: '5%' }}></div>
      <div className="bg-blob blob-cyan" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="services-header" style={{ marginBottom: '4rem' }}>
          <span className="section-subtitle" style={{ marginBottom: '1.5rem' }}>NUESTRAS ÁREAS DE DESARROLLO</span>
          <h2 style={{ fontSize: '2.2rem', lineHeight: '1.25' }}>Impulsando la eficiencia y el liderazgo organizacional</h2>
          <p style={{ maxWidth: '800px', margin: '1rem auto 0 auto', color: 'var(--text-muted)' }}>
            Diseñamos soluciones integrales enfocadas en la optimización operativa y la formación estratégica de sus equipos de trabajo.
          </p>
        </div>

        <div className="areas-grid">
          {/* Card 1: GESTIÓN DE NÓMINA - PAYROLL */}
          <div className="area-card card-payroll">
            <div className="area-icon-wrapper icon-payroll">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M9 16l2 2 4-4"></path>
              </svg>
            </div>
            <h3>GESTIÓN DE NÓMINA - PAYROLL</h3>
            <p className="area-description">
              Procesamos el cálculo de nómina y pago de salarios integrando tecnología, cumplimiento legal, tiempos oportunos y analítica de datos para una toma de decisiones optimizada.
            </p>
            <ul className="area-bullets">
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Normativa IESS, MDT y SRI</span>
              </li>
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Analítica de datos salarial</span>
              </li>
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Cumplimiento legal integral</span>
              </li>
            </ul>
          </div>

          {/* Card 2: ASESORÍA JURÍDICA Y LEGAL */}
          <div className="area-card card-juridica">
            <div className="area-icon-wrapper icon-juridica">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>ASESORÍA JURÍDICA Y LEGAL</h3>
            <p className="area-description">
              Asesoramos a su organización en derecho laboral y corporativo para prevenir riesgos, elaborar contratación a medida y garantizar el blindaje jurídico de su empresa.
            </p>
            <ul className="area-bullets">
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Auditorías y blindaje laboral</span>
              </li>
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Contratos y reglamentos internos</span>
              </li>
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Prevención de contingencias</span>
              </li>
            </ul>
          </div>

          {/* Card 3: CAPACITACIÓN CORPORATIVA */}
          <div className="area-card card-capacitacion">
            <div className="area-icon-wrapper icon-capacitacion">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>CAPACITACIÓN CORPORATIVA</h3>
            <p className="area-description">
              Formamos líderes que generan valor. Programas que combinan especialistas con metodologías probadas para un aprendizaje de alto impacto y aplicación inmediata.
            </p>
            <ul className="area-bullets">
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Programas / Cursos / Talleres</span>
              </li>
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Modalidad virtual, presencial e híbrida</span>
              </li>
              <li>
                <div className="bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>E-learning y plataformas digitales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
