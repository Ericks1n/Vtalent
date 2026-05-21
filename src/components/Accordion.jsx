import React, { useState } from 'react';

const ACCORDION_ITEMS = [
  {
    title: 'Cumplimiento Legal y IESS',
    content: 'Garantizamos que todos los procesos de contratación, nómina, liquidaciones y desvinculaciones cumplan estrictamente con las normativas vigentes del Ministerio del Trabajo (MDT) y el IESS en Ecuador.'
  },
  {
    title: 'Reclutamiento Ágil y Tecnológico',
    content: 'Combinamos inteligencia artificial con bases de datos locales robustas en Quito y todo el país para reducir a la mitad el tiempo de cobertura de tus vacantes, asegurando el mejor talento.'
  },
  {
    title: 'Pruebas Psicométricas Especializadas',
    content: 'Aplicamos herramientas psicométricas y evaluaciones de última generación para medir competencias técnicas, habilidades blandas, valores y adecuación cultural de cada postulante.'
  },
  {
    title: 'Fidelización y Clima Organizacional',
    content: 'Diseñamos diagnósticos integrales de clima laboral para identificar focos de insatisfacción y estructurar planes de retención que reduzcan la rotación voluntaria en tu empresa.'
  },
  {
    title: 'Capacitación Continua',
    content: 'Potenciamos las capacidades de tus colaboradores en liderazgo, comunicación asertiva, resolución de conflictos y productividad con talleres prácticos y aplicables.'
  }
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="como-elegir" className="section-padding" style={{ position: 'relative' }}>
      <div className="bg-blob blob-cyan" style={{ top: '20%', left: '-10%' }}></div>
      <div className="container split-grid">
        
        {/* Left Side: Text and Checklist */}
        <div className="choose-content" style={{ zIndex: 10 }}>
          <h2>¿Cómo elegir tu socio de Recursos Humanos?</h2>
          <p>
            Si tu empresa busca una consultora de Recursos Humanos en Ecuador, te recomendamos evaluar detenidamente los siguientes factores estratégicos:
          </p>
          <ul className="choose-list">
            <li className="choose-list-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>¿Cuentan con experiencia en el mercado laboral ecuatoriano?</span>
            </li>
            <li className="choose-list-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>¿Ofrecen soluciones personalizadas y flexibles a tu medida?</span>
            </li>
            <li className="choose-list-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>¿Tienen procesos respaldados por tecnología de reclutamiento moderna?</span>
            </li>
            <li className="choose-list-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>¿Sus consultores son profesionales certificados y experimentados?</span>
            </li>
          </ul>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Una vez respondas estas preguntas, podrás tomar una decisión estratégica que impulsará el crecimiento y la cultura de tu organización.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="accordion-wrapper" style={{ zIndex: 10 }}>
          {ACCORDION_ITEMS.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`accordion-item ${isActive ? 'active' : ''}`}>
                <button 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  {item.title}
                  <span className="accordion-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      {isActive ? (
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      ) : (
                        <>
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
