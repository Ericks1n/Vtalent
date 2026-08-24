import React, { useState, useMemo } from 'react';

/**
 * CATÁLOGO DE CURSOS - BALUARTALENT & CO.
 * Estructura académica formal: 10 cursos en modalidad virtual de 40 horas académicas.
 * Valor: $50 + IVA.
 */
const COURSES_DATA = [
  {
    id: 1,
    title: 'Gestión de Recursos Humanos y Administración y Legislación Laboral Aplicada',
    category: 'Talento Humano & Legal',
    price: '$50 + IVA',
    level: 'Todos los niveles',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Ing. Anita Barrios',
    image: '/courses/curso_1.png',
    shortDesc: 'Administración estratégica del talento humano y marco laboral ecuatoriano: contratos en el portal SUT, cálculo de nómina y recargos horarios, aportaciones al IESS, décimos, fondos de reserva, reglamentos internos y finiquitos.',
    colorAccent: '#1e40af',
    highlights: [
      'Perfiles de puesto y KPIs de talento',
      'Cálculo de nómina, horas extras y liquidaciones',
      'Contratación laboral y normativas MDT / IESS',
      'Gestión de trámites en plataforma SUT'
    ]
  },
  {
    id: 2,
    title: 'Liderazgo de Equipos de Alto Rendimiento y Habilidades Blandas',
    category: 'Liderazgo & Soft Skills',
    price: '$50 + IVA',
    level: 'Directivo / Mandos Medios',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Ing. Anita Barrios',
    image: '/courses/curso_2.png',
    shortDesc: 'Desarrollo de liderazgo transformacional, inteligencia emocional y gestión del tiempo (Matriz de Eisenhower), comunicación asertiva, retroalimentación (modelo SBI) y resolución de conflictos para guiar equipos de alto desempeño.',
    colorAccent: '#6366f1',
    highlights: [
      'Dirección de equipos multidisciplinarios',
      'Comunicación asertiva y feedback continuo',
      'Inteligencia emocional y resolución de conflictos',
      'Delegación efectiva y rendición de cuentas'
    ]
  },
  {
    id: 3,
    title: 'Atención al Cliente y Marketing Digital',
    category: 'Marketing & Clientes',
    price: '$50 + IVA',
    level: 'Todos los niveles',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'MBA. Jorge Macías Robles',
    image: '/courses/curso_3.png',
    shortDesc: 'Diseño de experiencias memorables del cliente (CX) y marketing digital omnicanal: dominio del embudo de conversión (AIDA), métricas clave (NPS, CAC, LTV), recuperación de clientes insatisfechos y posicionamiento orgánico.',
    colorAccent: '#0d9488',
    highlights: [
      'Customer Journey Map y estándares de calidad',
      'Protocolos de atención en WhatsApp Business',
      'Manejo de reclamos y resolución de quejas',
      'Indicadores de satisfacción CSAT y NPS'
    ]
  },
  {
    id: 4,
    title: 'Gestión de Proveedores y Negociación en Compras',
    category: 'Gestión & Compras',
    price: '$50 + IVA',
    level: 'Intermedio - Avanzado',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'MBA. Jorge Macías Robles',
    image: '/courses/curso_4.png',
    shortDesc: 'Optimización de compras estratégicas y abastecimiento: análisis del impacto en el EBITDA, segmentación con Matriz de Kraljic, homologación y auditoría de proveedores (OTIF), Costo Total de Propiedad (TCO) y negociación B2B.',
    colorAccent: '#d97706',
    highlights: [
      'Matriz de Kraljic y categorización de compras',
      'Homologación y evaluación de proveedores',
      'Técnicas de negociación y control de costos',
      'Estructuración de contratos y acuerdos SLA'
    ]
  },
  {
    id: 5,
    title: 'Derecho Laboral y Gestión de Conflictos',
    category: 'Talento Humano & Legal',
    price: '$50 + IVA',
    level: 'Especialista / Legal',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Dr. Héctor Cevallos Fernandez',
    image: '/courses/curso_5.png',
    shortDesc: 'Herramientas para la defensa legal y gestión procesal laboral en Ecuador: causales de terminación (Art. 169 CT), diferenciación de desahucio y despido, trámite de Visto Bueno en SUT, mediación extrajudicial y litigación COGEP.',
    colorAccent: '#1e40af',
    highlights: [
      'Auditoría y blindaje contractual laboral',
      'Procedimiento de Visto Bueno paso a paso',
      'Mediación y actas transaccionales',
      'Atención a inspecciones del Ministerio del Trabajo'
    ]
  },
  {
    id: 6,
    title: 'Gestión Ambiental y Manejo del SUIA',
    category: 'Gestión Ambiental',
    price: '$50 + IVA',
    level: 'Intermedio',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Dr. Héctor Cevallos Fernandez',
    image: '/courses/curso_6.png',
    shortDesc: 'Cumplimiento del marco regulatorio ambiental (COA y RCOA): trámites de regularización en el SUIA (Registros y Licencias), implementación del Plan de Manejo Ambiental (PMA), gestión de desechos peligrosos y auditorías ambientales.',
    colorAccent: '#059669',
    highlights: [
      'Registro y regularización en plataforma SUIA',
      'Certificados, registros y licencias ambientales',
      'Elaboración del Plan de Manejo Ambiental (PMA)',
      'Gestión de residuos peligrosos e informes IAC'
    ]
  },
  {
    id: 7,
    title: 'Administración de la Seguridad y Salud Ocupacional en Procesos Industriales',
    category: 'Seguridad & Salud (SST)',
    price: '$50 + IVA',
    level: 'Intermedio - Avanzado',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Ing. Juan Jose Piguabe',
    image: '/courses/curso_7.png',
    shortDesc: 'Identificación de peligros y evaluación de riesgos bajo normativa legal vigente de SST: control operacional en procesos industriales, planes de prevención y mitigación de accidentes de trabajo y enfermedades profesionales.',
    colorAccent: '#f59e0b',
    highlights: [
      'Matrices de evaluación de riesgos IPER',
      'Permisos de trabajo crítico (LOTO, confinados)',
      'Planes de emergencia y brigadas industriales',
      'Investigación de accidentes de trabajo'
    ]
  },
  {
    id: 8,
    title: 'Prevención de Riesgos Laborales y Trabajo en Alturas',
    category: 'Seguridad & Salud (SST)',
    price: '$50 + IVA',
    level: 'Todos los niveles',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Ing. Juan Jose Piguabe',
    image: '/courses/curso_8.png',
    shortDesc: 'Competencias técnicas en protección contra caídas y trabajo en alturas (>1.80m): análisis normativo OSHA/ANSI, inspección y uso de Equipos de Protección Individual (EPI), protocolos de seguridad y planes de rescate industrial.',
    colorAccent: '#ef4444',
    highlights: [
      'Normativa nacional e internacional (ANSI / OSHA)',
      'Inspección de arneses y líneas de vida',
      'Cálculo de distancia libre y puntos de anclaje',
      'Permisos de trabajo seguro (PTS) y rescate'
    ]
  },
  {
    id: 9,
    title: 'Salud Preventiva Ocupacional y Medicina del Trabajo',
    category: 'Salud Ocupacional',
    price: '$50 + IVA',
    level: 'Intermedio',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Mgtr. Lorena Cueva Pungacho',
    image: '/courses/curso_9.png',
    shortDesc: 'Programas de salud preventiva y vigilancia epidemiológica ocupacional: diagnóstico de factores de riesgo, profesiogramas, exámenes ocupacionales, estilos de vida saludables y control del ausentismo laboral.',
    colorAccent: '#0284c7',
    highlights: [
      'Profesiogramas y fichas médicas ocupacionales',
      'Protocolos de exámenes médicos ocupacionales',
      'Programas de prevención de alcohol y drogas',
      'Ergonomía laboral y vigilancia epidemiológica'
    ]
  },
  {
    id: 10,
    title: 'Salud Mental Laboral',
    category: 'Salud Ocupacional',
    price: '$50 + IVA',
    level: 'Todos los niveles',
    duration: '40 Horas',
    modality: 'Modalidad Virtual',
    instructor: 'Mgtr. Lorena Cueva Pungacho',
    image: '/courses/curso_10.png',
    shortDesc: 'Prevención y gestión del estrés y desgaste psicosocial en las organizaciones: criterios clínicos, neuropsicológicos y liderazgo saludable para prevenir el síndrome de Burnout y fortalecer la sostenibilidad emocional en el trabajo.',
    colorAccent: '#8b5cf6',
    highlights: [
      'Cuestionario de riesgo psicosocial MDT',
      'Detección y prevención del síndrome de Burnout',
      'Protocolos contra acoso y violencia laboral',
      'Programas de bienestar y salud emocional'
    ]
  }
];

const CATEGORIES = [
  'Todos',
  'Talento Humano & Legal',
  'Seguridad & Salud (SST)',
  'Salud Ocupacional',
  'Liderazgo & Soft Skills',
  'Marketing & Clientes',
  'Gestión & Compras',
  'Gestión Ambiental'
];

export default function Cursos({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrado reactivo en tiempo real
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.shortDesc.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.highlights.some(h => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="subpage-wrapper courses-page-wrapper">
      {/* Header Banner */}
      <header className="subpage-header courses-header">
        <div className="courses-header-dim"></div>
        <div className="bg-blob blob-purple" style={{ top: '-15%', right: '10%', opacity: 0.2 }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-20%', left: '5%', opacity: 0.2 }}></div>

        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Catálogo de Cursos</span>
          </div>

          <h1>CATÁLOGO DE CURSOS</h1>
          <p className="subpage-subtitle">
            Programas de formación especializada en modalidad virtual impartidos por el equipo de facilitadores de BALUARTALENT & Co.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="subpage-content section-padding" style={{ position: 'relative' }}>
        <div className="container">

          {/* Search & Category Filter Controls */}
          <div className="courses-control-bar">
            {/* Search Input */}
            <div className="courses-search-box">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Buscar por tema, módulo, instructor o palabra clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="courses-category-filters">
              <span className="filter-label">Áreas:</span>
              <div className="category-pills-list">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className={`category-pill-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-filters Status */}
            <div className="courses-sub-filters">
              <div className="results-count">
                Mostrando <strong>{filteredCourses.length}</strong> de <strong>{COURSES_DATA.length}</strong> cursos disponibles
              </div>
            </div>
          </div>

          {/* Courses Grid (4 cards per row, fully symmetrical) */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid-four">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card-compact">
                  
                  {/* Course Image Banner */}
                  <div className="course-card-image-wrap">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="course-card-img" 
                      loading="lazy"
                    />
                    <div className="course-card-image-overlay"></div>
                  </div>

                  {/* Card Category Tag */}
                  <div className="course-card-compact-header">
                    <span className="compact-category-tag" style={{ color: course.colorAccent, borderColor: `${course.colorAccent}33`, background: `${course.colorAccent}10` }}>
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="course-card-compact-title-area">
                    <h3 className="compact-course-title">{course.title}</h3>
                  </div>

                  {/* Meta Tags (Moved right below Title) */}
                  <div className="compact-meta-row">
                    <span className="compact-meta-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {course.duration}
                    </span>
                    <span className="compact-meta-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      {course.modality}
                    </span>
                    <span className="compact-meta-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      Certificado
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="compact-course-desc">{course.shortDesc}</p>

                  {/* Highlights / Contenidos clave */}
                  <div className="compact-highlights-box">
                    <span className="compact-highlights-title">Contenidos clave:</span>
                    <ul className="compact-highlights-list">
                      {course.highlights.map((item, idx) => (
                        <li key={idx}>
                          <span className="compact-bullet" style={{ color: course.colorAccent }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructor */}
                  <div className="compact-instructor-area">
                    <span className="compact-instructor-label">Instructor:</span>
                    <span className="compact-instructor-name">{course.instructor}</span>
                  </div>

                  {/* Price Tag & WhatsApp CTA */}
                  <div className="compact-card-footer">
                    <div className="compact-price-wrap">
                      <span className="compact-price-label">Inversión:</span>
                      <span className="compact-price-val">{course.price}</span>
                    </div>
                    <a
                      href={`https://wa.me/593964196795?text=${encodeURIComponent(`Hola BALUARTALENT & Co., deseo inscribirme o recibir más información sobre el curso: "${course.title}"`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="compact-whatsapp-btn"
                      aria-label={`Inscribirme al curso ${course.title} por WhatsApp`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Inscribirme</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="courses-empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No se encontraron cursos</h3>
              <p>Prueba ajustando los términos de búsqueda o seleccionando otra área.</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
              >
                Ver todos los cursos
              </button>
            </div>
          )}

          {/* Virtual Classroom Methodology */}
          <div className="courses-methodology-section">
            <div className="section-intro" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-subtitle">METODOLOGÍA DE FORMACIÓN</span>
              <h2>Metodología y Acreditación del Aula Virtual</h2>
              <p style={{ maxWidth: '750px', margin: '1rem auto 0 auto', color: 'var(--text-muted)' }}>
                Estructura de aprendizaje diseñada por BALUARTALENT & Co. para profesionales y organizaciones en modalidad virtual.
              </p>
            </div>

            <div className="methodology-grid">
              {/* Card 1: Modalidad 100% Virtual */}
              <div className="methodology-card methodology-card-primary">
                <div className="methodology-accent-bar bar-primary"></div>
                <div className="methodology-number">01</div>
                <div className="methodology-icon-wrap icon-wrap-primary">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h4>Modalidad 100% Virtual</h4>
                <p>Campus accesible las 24 horas con materiales de estudio, lecturas normativas actualizadas y actividades prácticas guiadas.</p>
              </div>

              {/* Card 2: 40 Horas Académicas */}
              <div className="methodology-card methodology-card-secondary">
                <div className="methodology-accent-bar bar-secondary"></div>
                <div className="methodology-number">02</div>
                <div className="methodology-icon-wrap icon-wrap-secondary">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h4>40 Horas Académicas</h4>
                <p>Carga horaria estructurada y flexible para profundizar en la aplicación técnica, operativa y regulatoria de cada disciplina.</p>
              </div>

              {/* Card 3: Talleres y Casos Prácticos */}
              <div className="methodology-card methodology-card-accent">
                <div className="methodology-accent-bar bar-accent"></div>
                <div className="methodology-number">03</div>
                <div className="methodology-icon-wrap icon-wrap-accent">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4>Talleres y Casos Prácticos</h4>
                <p>Análisis de casos reales de organizaciones en Ecuador, resolución de problemas y entrega de plantillas y herramientas aplicables.</p>
              </div>

              {/* Card 4: Certificado de Aprobación */}
              <div className="methodology-card methodology-card-indigo">
                <div className="methodology-accent-bar bar-indigo"></div>
                <div className="methodology-number">04</div>
                <div className="methodology-icon-wrap icon-wrap-indigo">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h4>Certificado de Aprobación</h4>
                <p>Certificación emitida por BALUARTALENT & Co. con código de registro, verificación curricular y respaldo profesional.</p>
              </div>
            </div>
          </div>

          {/* Return to Home Action */}
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
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
