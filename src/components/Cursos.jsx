import React, { useState, useMemo } from 'react';

/**
 * CATÁLOGO DE CURSOS - BALUARTALENT & CO.
 * Totalmente personalizable: Cada curso incluye precio de "$50 + IVA", temario detallado,
 * perfil del facilitador y modalidades del Aula Virtual.
 */
export const COURSES_DATA = [
  {
    id: 1,
    title: 'Gestión de Recursos Humanos y Administración y Legislación Laboral Aplicada',
    category: 'Talento Humano & Legal',
    price: '$50 + IVA',
    priceOriginal: '$120',
    level: 'Todos los niveles',
    duration: '40 Horas',
    modality: 'En Vivo + Aula Virtual',
    badge: 'Más Solicitado',
    badgeType: 'popular',
    rating: 4.96,
    reviewsCount: 235,
    instructor: 'Psic. Carlos Mendoza & Abg. Valeria Andrade',
    instructorRole: 'Especialistas en Talento Humano y Derecho Laboral',
    shortDesc: 'Administración estratégica del personal, diseño de perfiles por competencias, nómina, contratos y aplicación práctica de la legislación laboral ecuatoriana vigente.',
    colorAccent: '#1e40af', // Navy Blue
    gradientBg: 'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(13, 148, 136, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    highlights: [
      'Diseño de perfiles de puesto y KPIs de gestión del talento',
      'Cálculo práctico de nómina, décimos, horas extras y liquidaciones',
      'Contratación laboral, normativas MDT, IESS y trámites en SUT',
      'Formatos, matrices y plantillas descargables en Excel'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Estructura y Administración del Talento Humano',
        topics: ['Mapeo de puestos y diccionario de competencias', 'Procesos de reclutamiento, selección e inducción ágil', 'Evaluación del desempeño 360° y matriz de evaluación']
      },
      {
        title: 'Módulo 2: Contratación y Marco Legal Ecuatoriano',
        topics: ['Tipos de contratos vigentes en el Código del Trabajo', 'Jornadas laborales, descansos obligatorios y horas suplementarias', 'Reglamento Interno de Trabajo ante el MDT']
      },
      {
        title: 'Módulo 3: Nómina, Beneficios de Ley y Obligaciones Patronales',
        topics: ['Cálculo de décimo tercero, décimo cuarto y utilidades', 'Aportaciones y planillas en la plataforma IESS', 'Retenciones en la fuente bajo relación de dependencia (SRI)']
      },
      {
        title: 'Módulo 4: Desvinculaciones y Finiquitos en Plataforma SUT',
        topics: ['Causales legales: Visto Bueno, desahucio y despido intempestivo', 'Cálculo de indemnizaciones legales', 'Generación y legalización de actas de finiquito']
      }
    ],
    targetAudience: 'Directores de RRHH, jefes de personal, administradores de empresas, contadores, asistentes de talento humano y emprendedores.',
    certification: 'Certificado de Aprobación avalado por BALUARTALENT & Co. (40 horas académicas).'
  },
  {
    id: 2,
    title: 'Liderazgo de Equipos de Alto Rendimiento y Habilidades Blandas',
    category: 'Liderazgo & Soft Skills',
    price: '$50 + IVA',
    priceOriginal: '$110',
    level: 'Directivo / Mandos Medios',
    duration: '30 Horas',
    modality: 'En Vivo (Sincrónico)',
    badge: 'Alta Demanda',
    badgeType: 'popular',
    rating: 4.93,
    reviewsCount: 184,
    instructor: 'Dra. Andrea Morales, Ph.D. (c)',
    instructorRole: 'Executive Coach y Facilitadora Organizacional',
    shortDesc: 'Potencia la dirección de equipos, comunicación asertiva, motivación, inteligencia emocional, gestión del tiempo y liderazgo transformacional.',
    colorAccent: '#6366f1', // Indigo
    gradientBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
    highlights: [
      'Estrategias para liderar equipos presenciales y remotos',
      'Comunicación asertiva y persuasión ejecutiva',
      'Inteligencia emocional y resolución colaborativa de tensiones',
      'Delegación efectiva sin microgestión y accountability'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Estilos de Liderazgo y Autoconocimiento',
        topics: ['Liderazgo transformacional y adaptativo', 'Inteligencia emocional aplicada a la toma de decisiones', 'Creación de entornos con seguridad psicológica']
      },
      {
        title: 'Módulo 2: Comunicación Estratégica y Feedback Continuo',
        topics: ['Técnicas de comunicación asertiva y escucha activa', 'Retroalimentación constructiva (Modelo SBI)', 'Manejo de conversaciones difíciles en el equipo']
      },
      {
        title: 'Módulo 3: Dinámica de Equipos y Metodologías Ágiles',
        topics: ['Etapas de desarrollo del equipo de Tuckman', 'Fomento de la confianza y sinergia multidisciplinaria', 'Gestión del tiempo y priorización en entornos de alta exigencia']
      },
      {
        title: 'Módulo 4: Motivación, Delegación y Rendición de Cuentas',
        topics: ['Motivación intrínseca y salario emocional', 'Matriz de asignación y delegación efectiva', 'Cultura de compromiso y orientación a resultados']
      }
    ],
    targetAudience: 'Gerentes, directores, jefes de departamento, supervisores, coordinadores y profesionales que dirigen personas.',
    certification: 'Certificado Ejecutivo en Liderazgo y Habilidades Directivas (30 horas).'
  },
  {
    id: 3,
    title: 'Atención al Cliente y Marketing Digital',
    category: 'Marketing & Clientes',
    price: '$50 + IVA',
    priceOriginal: '$115',
    level: 'Todos los niveles',
    duration: '32 Horas',
    modality: 'Aula Virtual + Talleres',
    badge: 'Práctico & Dinámico',
    badgeType: 'featured',
    rating: 4.91,
    reviewsCount: 198,
    instructor: 'Lic. Mónica Salazar, M.Sc.',
    instructorRole: 'Consultora en Experiencia del Cliente (CX) y Marketing Digital',
    shortDesc: 'Protocolos de servicio al cliente omnicanal, experiencia del cliente (CX), atención ágil por WhatsApp Business y estrategias de marketing digital para captación.',
    colorAccent: '#0d9488', // Teal
    gradientBg: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(56, 189, 248, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    highlights: [
      'Customer Journey Map y momentos clave de verdad',
      'Manejo de clientes difíciles y técnicas de desescalamiento',
      'Configuración profesional de WhatsApp Business y respuestas rápidas',
      'Métricas de satisfacción: CSAT, NPS y retención de clientes'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Fundamentos de la Experiencia del Cliente (CX)',
        topics: ['De la atención tradicional a la fidelización estratégica', 'Mapeo del viaje del cliente y puntos de dolor', 'Estándares de calidad y etiqueta de servicio']
      },
      {
        title: 'Módulo 2: Canales Digitales y WhatsApp Business',
        topics: ['Protocolos para atención ágil por WhatsApp y chat', 'Plantillas de respuestas efectivas y catálogos de producto', 'Tono de voz de la marca en redes sociales']
      },
      {
        title: 'Módulo 3: Recuperación de Clientes y Manejo de Reclamos',
        topics: ['Metodología LAST para resolución de quejas', 'Control emocional ante clientes insatisfechos', 'Soluciones de primer contacto y límites del servicio']
      },
      {
        title: 'Módulo 4: Estrategias de Marketing Digital para Captación',
        topics: ['Atracción de prospectos calificados en canales digitales', 'Email marketing de seguimiento y fidelización', 'Medición de indicadores clave de satisfacción (NPS/CSAT)']
      }
    ],
    targetAudience: 'Equipos de atención al cliente, ejecutivos de soporte, recepcionistas, community managers y personal de ventas.',
    certification: 'Certificado de Especialización en Atención al Cliente y Marketing Digital (32 horas).'
  },
  {
    id: 4,
    title: 'Gestión de Proveedores y Negociación en Compras',
    category: 'Gestión & Compras',
    price: '$50 + IVA',
    priceOriginal: '$125',
    level: 'Intermedio - Avanzado',
    duration: '28 Horas',
    modality: 'En Vivo (Sincrónico)',
    badge: 'Estratégico',
    badgeType: 'featured',
    rating: 4.88,
    reviewsCount: 142,
    instructor: 'Ing. Javier Borja, MBA',
    instructorRole: 'Especialista en Cadena de Suministro y Negociación B2B',
    shortDesc: 'Técnicas de homologación y evaluación de proveedores, optimización del ciclo de abastecimiento, reducción de costos y negociación estratégica en compras.',
    colorAccent: '#d97706', // Amber Dark
    gradientBg: 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    highlights: [
      'Metodologías de selección, evaluación y homologación de proveedores',
      'Estrategias de negociación basadas en el Método Harvard',
      'Gestión de contratos con proveedores y acuerdos SLA',
      'Optimización del costo total de adquisición (TCO)'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Estrategia de Compras y Cadena de Suministro',
        topics: ['El rol estratégico de compras en la rentabilidad de la empresa', 'Matriz de Kraljic para categorización de compras', 'Planificación de requerimientos y presupuesto de compras']
      },
      {
        title: 'Módulo 2: Homologación y Evaluación de Proveedores',
        topics: ['Criterios financieros, técnicos y legales para calificar proveedores', 'Indicadores de desempeño de proveedores (KPIs de entrega y calidad)', 'Planes de desarrollo y alianzas con proveedores estratégicos']
      },
      {
        title: 'Módulo 3: Negociación Estratégica en Compras',
        topics: ['Preparación de la negociación: MAPAN y zona de posible acuerdo (ZOPA)', 'Tácticas de negociación de precios, plazos y condiciones de pago', 'Defensa contra tácticas duras del proveedor']
      },
      {
        title: 'Módulo 4: Contratos, SLAs y Gestión del Riesgo en Compras',
        topics: ['Estructuración de Acuerdos de Nivel de Servicio (SLA)', 'Cláusulas de penalidad, garantías y cumplimiento', 'Auditoría y control del proceso de adquisiciones']
      }
    ],
    targetAudience: 'Jefes de compras, analistas de adquisiciones, gerentes de operaciones, administradores y profesionales de logística.',
    certification: 'Certificado de Especialización en Gestión de Proveedores y Negociación (28 horas).'
  },
  {
    id: 5,
    title: 'Derecho Laboral y Gestión de Conflictos',
    category: 'Talento Humano & Legal',
    price: '$50 + IVA',
    priceOriginal: '$130',
    level: 'Especialista / Legal',
    duration: '35 Horas',
    modality: 'En Vivo + Casos Prácticos',
    badge: 'Blindaje Jurídico',
    badgeType: 'featured',
    rating: 4.95,
    reviewsCount: 176,
    instructor: 'Abg. Mauricio Cárdenas, M.Sc.',
    instructorRole: 'Asesor Jurídico Corporativo y Litigante Laboral',
    shortDesc: 'Marco jurídico laboral, trámites de Visto Bueno, desvinculaciones seguras, mediación de controversias laborales y prevención de litigios o multas del MDT.',
    colorAccent: '#1e40af', // Navy
    gradientBg: 'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(15, 23, 42, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    highlights: [
      'Auditoría laboral preventiva y blindaje contractual de la empresa',
      'Causales de terminación, actas de finiquito y transacciones notariales',
      'Técnicas de mediación y resolución pacífica de controversias',
      'Manejo de inspecciones y requerimientos del Ministerio del Trabajo'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Marco Normativo y Prevención de Riesgos Legales',
        topics: ['Código del Trabajo y reformas laborales recientes', 'Expedientes de personal, contratos y adendas obligatorias', 'Régimen disciplinario y aplicación válida de sanciones']
      },
      {
        title: 'Módulo 2: Procedimiento de Visto Bueno Paso a Paso',
        topics: ['Causales de visto bueno imputables al trabajador y al empleador', 'Elaboración del trámite y sustanciación ante el Inspector del Trabajo', 'Pruebas admisibles y contestación de traslados']
      },
      {
        title: 'Módulo 3: Mediación y Negociación de Salidas Laborales',
        topics: ['Técnicas de mediación en conflictos laborales individuales', 'Redacción de actas transaccionales con efecto de sentencia', 'Cálculo de indemnizaciones para evitar demandas posteriores']
      },
      {
        title: 'Módulo 4: Inspecciones Laborales y Glosas IESS',
        topics: ['Atención protocolar a inspectores del MDT', 'Descargos de citaciones y plazos de subsanación', 'Recursos administrativos de impugnación']
      }
    ],
    targetAudience: 'Abogados laborales, gerentes de RRHH, directores generales, jefes de nómina y asesores corporativos.',
    certification: 'Certificado de Especialización en Derecho Laboral y Gestión de Conflictos (35 horas).'
  },
  {
    id: 6,
    title: 'Gestión Ambiental y Manejo del SUIA',
    category: 'Gestión Ambiental',
    price: '$50 + IVA',
    priceOriginal: '$120',
    level: 'Intermedio',
    duration: '32 Horas',
    modality: 'Aula Virtual + Masterclass',
    badge: 'Normativa MAATE',
    badgeType: 'official',
    rating: 4.89,
    reviewsCount: 130,
    instructor: 'Ing. Ambiental David Proaño, M.Sc.',
    instructorRole: 'Auditor y Consultor Ambiental Calificado MAATE',
    shortDesc: 'Cumplimiento de la normativa ambiental ecuatoriana, regularización en el Sistema Único de Información Ambiental (SUIA), planes de manejo y auditorías.',
    colorAccent: '#059669', // Emerald
    gradientBg: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    highlights: [
      'Guía práctica para el uso y registro en la plataforma SUIA',
      'Certificados y licencias ambientales según catálogo CIU',
      'Elaboración y seguimiento del Plan de Manejo Ambiental (PMA)',
      'Gestión integral de residuos peligrosos y cumplimiento MAATE'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Marco Legal Ambiental Ecuatoriano (COA y RCOA)',
        topics: ['Código Orgánico del Ambiente y su reglamento', 'Competencias del MAATE y Gobiernos Autónomos Descentralizados', 'Responsabilidad y régimen sancionatorio ambiental']
      },
      {
        title: 'Módulo 2: Regularización Ambiental en la Plataforma SUIA',
        topics: ['Registro y categorización en el SUIA según actividad CIU', 'Obtención de Certificado Ambiental, Registro y Licencia Ambiental', 'Requisitos y pago de tasas administrativas']
      },
      {
        title: 'Módulo 3: Plan de Manejo Ambiental (PMA) y Residuos Peligrosos',
        topics: ['Estructuración de programas del PMA (mitigación, contingencias, monitoreo)', 'Registro como generador de residuos peligrosos y especiales', 'Declaración anual y manifiestos únicos de entrega-recepción']
      },
      {
        title: 'Módulo 4: Informes Ambientales de Cumplimiento y Auditorías',
        topics: ['Elaboración del Informe Ambiental de Cumplimiento (IAC)', 'Auditorías ambientales periódicas de seguimiento', 'Preparación para inspecciones de la autoridad ambiental']
      }
    ],
    targetAudience: 'Ingenieros ambientales, técnicos de SST, responsables de operaciones, jefes de planta y consultores ambientales.',
    certification: 'Certificado de Gestión Ambiental y Manejo del SUIA (32 horas).'
  },
  {
    id: 7,
    title: 'Administración de la Seguridad y Salud Ocupacional en Procesos Industriales',
    category: 'Seguridad & Salud (SST)',
    price: '$50 + IVA',
    priceOriginal: '$135',
    level: 'Intermedio - Avanzado',
    duration: '45 Horas',
    modality: 'En Vivo (Sincrónico)',
    badge: 'Oficial MDT / IESS',
    badgeType: 'official',
    rating: 4.94,
    reviewsCount: 210,
    instructor: 'Ing. Fernando Gómez, M.Sc.',
    instructorRole: 'Auditor Líder en Seguridad y Salud Ocupacional',
    shortDesc: 'Implementación del Sistema de Gestión de SST en plantas y operaciones industriales, matrices IPER, control operacional y normativas CD 513 / CD 517 del IESS.',
    colorAccent: '#f59e0b', // Amber
    gradientBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    highlights: [
      'Matrices de identificación de peligros y evaluación de riesgos industriales (IPER)',
      'Permisos de trabajo de alto riesgo (LOTO, espacios confinados, caliente)',
      'Planes de emergencia, brigadas y simulacros industriales',
      'Investigación de accidentes de trabajo bajo normativa IESS'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Marco Normativo de Seguridad Industrial en Ecuador',
        topics: ['Decreto Ejecutivo 2393 y Resoluciones CD 513 y CD 517 del IESS', 'Responsabilidad civil y penal del empleador en accidentes', 'Registro del sistema de gestión en la plataforma SUT']
      },
      {
        title: 'Módulo 2: Identificación de Peligros y Evaluación de Riesgos (IPER)',
        topics: ['Riesgos mecánicos, eléctricos, químicos y físicos en planta', 'Metodologías INSHT, Fine y matrices matriciales', 'Medidas de control jerárquico en procesos productivos']
      },
      {
        title: 'Módulo 3: Procedimientos de Trabajo Seguro y Tareas Críticas',
        topics: ['Bloqueo y etiquetado de energías peligrosas (LOTO)', 'Trabajos en caliente y atmósferas inflamables', 'Espacios confinados y control de sustancias químicas peligrosas']
      },
      {
        title: 'Módulo 4: Planes de Contingencia e Investigación de Siniestros',
        topics: ['Diseño del plan de autoprotección y conformación de brigadas', 'Metodología del Árbol de Causas para investigación de accidentes', 'Reporte inmediato al IESS y medidas correctivas']
      }
    ],
    targetAudience: 'Jefes de SST, ingenieros de planta, supervisores industriales, miembros del comité paritario y gerentes de operaciones.',
    certification: 'Certificado de Gestión Integral en Seguridad Industrial y SST (45 horas).'
  },
  {
    id: 8,
    title: 'Prevención de Riesgos Laborales y Trabajo en Alturas',
    category: 'Seguridad & Salud (SST)',
    price: '$50 + IVA',
    priceOriginal: '$120',
    level: 'Todos los niveles',
    duration: '24 Horas',
    modality: 'En Vivo + Simulaciones',
    badge: 'Técnico Especializado',
    badgeType: 'popular',
    rating: 4.92,
    reviewsCount: 160,
    instructor: 'Ing. Marco Herrera, Esp.',
    instructorRole: 'Entrenador Certificado en Trabajo Seguro en Alturas y Rescate',
    shortDesc: 'Normas de seguridad para trabajos en altura (>1.80m), uso e inspección de equipos de protección contra caídas (EPCC), andamios y planes de rescate.',
    colorAccent: '#ef4444', // Red
    gradientBg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(249, 115, 22, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    highlights: [
      'Normativa OSHA, ANSI y legislación ecuatoriana para trabajos en altura',
      'Inspección, mantenimiento y descarte de arneses y líneas de vida',
      'Cálculo de distancia libre de caída y selección de puntos de anclaje',
      'Protocolos de permisos de trabajo seguro (PTS) y plan de rescate'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Marco Legal y Definición de Trabajos en Altura',
        topics: ['Normativa ecuatoriana y estándares internacionales (ANSI Z359)', 'Responsabilidades del emisor del permiso, supervisor y operario', 'Aptitud médica ocupacional para trabajo en alturas']
      },
      {
        title: 'Módulo 2: Equipos de Protección Contra Caídas (EPCC)',
        topics: ['Tipos de arneses de cuerpo entero y factores de caída', 'Líneas de vida verticales, horizontales y absorbedores de energía', 'Criterios técnicos para inspección y retiro de equipos']
      },
      {
        title: 'Módulo 3: Sistemas de Acceso: Andamios, Escaleras y Manlifts',
        topics: ['Normas para montaje y uso seguro de andamios tubulares y multidireccionales', 'Seguridad en escaleras portátiles y plataformas elevadoras', 'Líneas de anclaje provisionales y definitivas']
      },
      {
        title: 'Módulo 4: Permisos de Trabajo en Altura y Rescate de Emergencia',
        topics: ['Elaboración del Permiso de Trabajo Seguro (PTS) y checklist previo', 'Síndrome del arnés (trauma por suspensión) y primeros auxilios', 'Procedimientos básicos de rescate en altura']
      }
    ],
    targetAudience: 'Supervisores de obra, técnicos de SST, operarios de mantenimiento, linieros, personal de construcción y contratistas.',
    certification: 'Certificado de Trabajo Seguro en Alturas y Prevención de Caídas (24 horas).'
  },
  {
    id: 9,
    title: 'Salud Preventiva Ocupacional y Medicina del Trabajo',
    category: 'Salud Ocupacional',
    price: '$50 + IVA',
    priceOriginal: '$125',
    level: 'Intermedio',
    duration: '36 Horas',
    modality: 'Aula Virtual Asincrónica + Tutorías',
    badge: 'Normativa MSP / MDT',
    badgeType: 'official',
    rating: 4.88,
    reviewsCount: 145,
    instructor: 'Dr. Roberto Zambrano, M.Sc.',
    instructorRole: 'Médico Especialista en Salud Ocupacional y Medicina del Trabajo',
    shortDesc: 'Vigilancia de la salud de los trabajadores, profesiogramas, exámenes médicos ocupacionales, prevención de enfermedades profesionales y normativas MSP/MDT.',
    colorAccent: '#0284c7', // Cyan Blue
    gradientBg: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(14, 165, 233, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    highlights: [
      'Diseño de profesiogramas y fichas médicas ocupacionales',
      'Exámenes médicos de ingreso, periódicos, de reintegro y de retiro',
      'Programas de prevención de consumo de drogas y alcohol (MDT/MSP)',
      'Ergonomía en el trabajo, pausas activas y vigilancia epidemiológica'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Fundamentos de la Vigilancia de la Salud Laboral',
        topics: ['Marco legal MSP, MDT e IESS sobre medicina ocupacional', 'Elaboración del profesiograma por puesto de trabajo', 'Gestión de historias clínicas ocupacionales y confidencialidad']
      },
      {
        title: 'Módulo 2: Protocolos de Exámenes Médicos Ocupacionales',
        topics: ['Exámenes pre-empleo, periódicos, especiales y de egreso', 'Criterios de aptitud médica laboral y restricciones', 'Detección temprana y calificación de enfermedades profesionales']
      },
      {
        title: 'Módulo 3: Programas Preventivos Obligatorios del MDT / MSP',
        topics: ['Programa de prevención integral del uso y consumo de drogas', 'Programa de salud sexual y reproductiva en el ámbito laboral', 'Campañas de inmunización y estilos de vida saludables']
      },
      {
        title: 'Módulo 4: Ergonomía Básica y Vigilancia Epidemiológica',
        topics: ['Evaluación rápida de posturas forzadas y movimientos repetitivos', 'Diseño de programas de pausas activas personalizadas', 'Indicadores de ausentismo por causas médicas y morbilidad']
      }
    ],
    targetAudience: 'Médicos ocupacionales, enfermeros de empresa, técnicos de SST, psicólogos laborales y responsables de talento humano.',
    certification: 'Certificado de Especialización en Salud Preventiva y Medicina del Trabajo (36 horas).'
  },
  {
    id: 10,
    title: 'Salud Mental Laboral',
    category: 'Salud Ocupacional',
    price: '$50 + IVA',
    priceOriginal: '$110',
    level: 'Todos los niveles',
    duration: '28 Horas',
    modality: 'En Vivo + Talleres Prácticos',
    badge: 'Bienestar Integral',
    badgeType: 'popular',
    rating: 4.95,
    reviewsCount: 190,
    instructor: 'Psic. Gabriela Rivas, Esp.',
    instructorRole: 'Especialista en Psicología Ocupacional y Bienestar Laboral',
    shortDesc: 'Diagnóstico e intervención de riesgos psicosociales (Cuestionario MDT), prevención del síndrome de Burnout, manejo del estrés laboral y fomento del bienestar.',
    colorAccent: '#8b5cf6', // Violet
    gradientBg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    highlights: [
      'Aplicación del protocolo de evaluación de riesgo psicosocial del MDT',
      'Detección temprana y prevención del agotamiento laboral (Burnout)',
      'Protocolos para prevención del acoso laboral y violencia de género',
      'Diseño de programas corporativos de bienestar y salud emocional'
    ],
    syllabus: [
      {
        title: 'Módulo 1: Marco Legal y Factores de Riesgo Psicosocial',
        topics: ['Normativa ecuatoriana del MDT sobre riesgos psicosociales', 'Convenio 190 OIT sobre violencia y acoso en el mundo del trabajo', 'Factores intralaborales, extralaborales e individuales']
      },
      {
        title: 'Módulo 2: Aplicación del Cuestionario de Riesgo Psicosocial MDT',
        topics: ['Metodología de sensibilización y aplicación anónima', 'Tabulación e interpretación de resultados por dimensiones', 'Estructuración del informe técnico oficial para la plataforma SUT']
      },
      {
        title: 'Módulo 3: Prevención del Burnout y Manejo del Estrés Ocupacional',
        topics: ['Fases del síndrome de Burnout y signos de alerta', 'Técnicas de gestión del estrés y desconexión digital', 'Primeros auxilios psicológicos en el entorno laboral']
      },
      {
        title: 'Módulo 4: Protocolos de Acoso Laboral y Cultura de Bienestar',
        topics: ['Protocolo obligatorio de prevención y atención de casos de discriminación y acoso', 'Rutas de denuncia confidencial y comités de resolución', 'Estrategias organizacionales de bienestar y salario emocional']
      }
    ],
    targetAudience: 'Psicólogos organizacionales, directores de RRHH, médicos de empresa, técnicos de SST y líderes de equipo.',
    certification: 'Certificado de Especialización en Salud Mental y Bienestar Laboral (28 horas).'
  }
];

export const CATEGORIES = [
  'Todos',
  'Talento Humano & Legal',
  'Seguridad & Salud (SST)',
  'Salud Ocupacional',
  'Liderazgo & Soft Skills',
  'Marketing & Clientes',
  'Gestión & Compras',
  'Gestión Ambiental'
];

export const MODALITIES = [
  'Todas',
  'En Vivo (Sincrónico)',
  'En Vivo + Aula Virtual',
  'Aula Virtual + Talleres',
  'Aula Virtual Asincrónica'
];

export default function Cursos({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedModality, setSelectedModality] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  // Filtrado reactivo en tiempo real
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
      const matchesModality = selectedModality === 'Todas' || course.modality.toLowerCase().includes(selectedModality.toLowerCase().replace('todas', ''));
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.shortDesc.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.highlights.some(h => h.toLowerCase().includes(query));

      return matchesCategory && matchesModality && matchesSearch;
    });
  }, [selectedCategory, selectedModality, searchQuery]);

  const handleOpenCourseModal = (course) => {
    setActiveCourseModal(course);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCourseModal = () => {
    setActiveCourseModal(null);
    document.body.style.overflow = 'auto';
  };

  const getWhatsAppLink = (courseTitle) => {
    const text = encodeURIComponent(
      `Hola BALUARTALENT & Co., me gustaría solicitar información, fechas de inicio y matrícula para el curso: "${courseTitle}" ($50 + IVA) del Aula Virtual.`
    );
    return `https://wa.me/593964196795?text=${text}`;
  };

  return (
    <div className="subpage-wrapper courses-page-wrapper">
      {/* Header Banner */}
      <header className="subpage-header courses-header">
        <div className="bg-blob blob-purple" style={{ top: '-15%', right: '10%' }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-20%', left: '5%' }}></div>

        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Cursos & Aula Virtual</span>
          </div>
          
          <div className="courses-header-badges">
            <span className="header-pill">🎓 Certificación Avalada</span>
            <span className="header-pill">💻 Aula Virtual 24/7</span>
            <span className="header-pill">👨‍🏫 Facilitadores Senior</span>
            <span className="header-pill">🏷️ Todos a $50 + IVA</span>
          </div>

          <h1>CATÁLOGO DE CURSOS & AULA VIRTUAL</h1>
          <p className="subpage-subtitle">
            Programas formativos de alto impacto diseñados para actualizar competencias clave, potenciar el rendimiento laboral y garantizar el cumplimiento normativo en su organización.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="subpage-content section-padding" style={{ position: 'relative' }}>
        <div className="container">
          
          {/* Promo Callout Banner */}
          <div className="courses-promo-callout">
            <div className="promo-callout-icon">⚡</div>
            <div className="promo-callout-text">
              <strong>¡Inscripciones Abiertas para Todas las Cohortes!</strong>
              <span> Accede a cualquiera de nuestros 10 programas especializados con tarifa promocional de <strong>$50 + IVA</strong> por participante. Incluye certificación oficial y acceso al aula virtual.</span>
            </div>
            <a
              href="https://wa.me/593964196795?text=Hola%20BALUARTALENT%20%26%20Co.,%20quisiera%20consultar%20por%20la%20promoci%C3%B3n%20de%20cursos%20a%20$50%20+%20IVA."
              target="_blank"
              rel="noopener noreferrer"
              className="promo-callout-btn"
            >
              Consultar Cupos
            </a>
          </div>

          {/* Search & Filter Controls */}
          <div className="courses-control-bar">
            {/* Search Input */}
            <div className="courses-search-box">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Buscar por tema, habilidad, docente o palabra clave..."
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
              <span className="filter-label">Categorías:</span>
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

            {/* Modality and Count Sub-bar */}
            <div className="courses-sub-filters">
              <div className="modality-filter-group">
                <label htmlFor="modality-select">Modalidad:</label>
                <select
                  id="modality-select"
                  value={selectedModality}
                  onChange={(e) => setSelectedModality(e.target.value)}
                  className="modality-select"
                >
                  {MODALITIES.map((mod) => (
                    <option key={mod} value={mod}>{mod}</option>
                  ))}
                </select>
              </div>

              <div className="results-count">
                Mostrando <strong>{filteredCourses.length}</strong> de <strong>{COURSES_DATA.length}</strong> cursos disponibles
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  
                  {/* Card Header & Accent Top Bar */}
                  <div className="course-card-top" style={{ background: course.gradientBg, borderBottom: `2px solid ${course.colorAccent}22` }}>
                    <div className="course-badge-row">
                      <span className="course-category-tag" style={{ color: course.colorAccent, borderColor: `${course.colorAccent}44`, background: `${course.colorAccent}15` }}>
                        {course.category}
                      </span>
                      
                      {/* Price Tag Pill */}
                      <div className="course-price-pill">
                        <span className="price-tag-value">{course.price}</span>
                      </div>
                    </div>

                    <div className="course-icon-title-row">
                      <div className="course-card-icon" style={{ color: course.colorAccent, background: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                        {course.icon}
                      </div>
                      <div className="course-top-right-meta">
                        {course.badge && (
                          <span className={`course-status-badge badge-${course.badgeType}`}>
                            {course.badge}
                          </span>
                        )}
                        <div className="course-rating-mini">
                          <span className="star-icon">★</span>
                          <span className="rating-num">{course.rating}</span>
                          <span className="reviews-num">({course.reviewsCount})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="course-card-body">
                    <h3 className="course-card-title">{course.title}</h3>
                    <p className="course-card-desc">{course.shortDesc}</p>

                    {/* Key Highlights list */}
                    <div className="course-highlights-box">
                      <span className="highlights-title">Temas Clave:</span>
                      <ul className="course-highlights-list">
                        {course.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx}>
                            <svg className="check-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: course.colorAccent }}>
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Instructor Info */}
                    <div className="course-instructor-info">
                      <div className="instructor-avatar-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="instructor-text">
                        <span className="instructor-label">Docente Facilitador:</span>
                        <span className="instructor-name">{course.instructor}</span>
                      </div>
                    </div>

                    {/* Meta Info: Duration, Modality, Level */}
                    <div className="course-meta-tags">
                      <span className="meta-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {course.duration}
                      </span>
                      <span className="meta-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        {course.modality}
                      </span>
                      <span className="meta-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20V10"></path>
                          <path d="M18 20V4"></path>
                          <path d="M6 20v-4"></path>
                        </svg>
                        {course.level}
                      </span>
                    </div>

                    {/* Price Bar in Card */}
                    <div className="course-card-price-bar">
                      <div className="price-bar-left">
                        <span className="price-label">Inversión Especial:</span>
                        <div className="price-amount-box">
                          <span className="price-amount">{course.price}</span>
                          {course.priceOriginal && (
                            <span className="price-original">{course.priceOriginal}</span>
                          )}
                        </div>
                      </div>
                      <div className="price-bar-right">
                        <span className="price-installments">Cupos limitados</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="course-card-footer">
                    <button
                      type="button"
                      className="btn-course-details"
                      onClick={() => handleOpenCourseModal(course)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      Ver Temario Completo
                    </button>
                    
                    <a
                      href={getWhatsAppLink(course.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-course-enroll"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      Inscribirme ({course.price})
                    </a>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="courses-empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No se encontraron cursos coincidentes</h3>
              <p>Prueba ajustando los términos de búsqueda o eliminando los filtros seleccionados.</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSelectedModality('Todas');
                  setSearchQuery('');
                }}
              >
                Restablecer todos los filtros
              </button>
            </div>
          )}

          {/* Virtual Classroom Methodology Feature Cards */}
          <div className="courses-methodology-section">
            <div className="section-intro" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-subtitle">METODOLOGÍA DE FORMACIÓN</span>
              <h2>¿Cómo funciona nuestra Aula Virtual?</h2>
              <p style={{ maxWidth: '750px', margin: '1rem auto 0 auto', color: 'var(--text-muted)' }}>
                Diseñamos una experiencia de formación interactiva que combina teoría actualizada, casos reales aplicados a empresas del Ecuador y retroalimentación experta.
              </p>
            </div>

            <div className="methodology-grid">
              <div className="methodology-card">
                <div className="methodology-number">01</div>
                <div className="methodology-icon">🚀</div>
                <h4>Inscripción Ágil & Tarifa Única</h4>
                <p>Matrícula inmediata a solo $50 + IVA por curso con acceso a la plataforma digital y material descargable previo.</p>
              </div>

              <div className="methodology-card">
                <div className="methodology-number">02</div>
                <div className="methodology-icon">💻</div>
                <h4>Clases en Vivo & Grabaciones 24/7</h4>
                <p>Sesiones sincrónicas interactivas con facilitadores senior y grabaciones en alta definición disponibles en el campus.</p>
              </div>

              <div className="methodology-card">
                <div className="methodology-number">03</div>
                <div className="methodology-icon">📊</div>
                <h4>Talleres Prácticos & Plantillas</h4>
                <p>Resolución de casos de estudio reales, plantillas editables en Excel/Word para aplicar directamente en tu empresa.</p>
              </div>

              <div className="methodology-card">
                <div className="methodology-number">04</div>
                <div className="methodology-icon">🎓</div>
                <h4>Certificación Oficial Verificable</h4>
                <p>Certificados oficiales respaldados por BALUARTALENT & Co. con código de verificación para validar tus competencias.</p>
              </div>
            </div>
          </div>

          {/* In-Company Training CTA Banner */}
          <div className="incompany-cta-banner">
            <div className="incompany-cta-content">
              <span className="incompany-badge">SOLUCIONES CORPORATIVAS A MEDIDA</span>
              <h3>¿Deseas capacitar al equipo completo de tu empresa?</h3>
              <p>
                Adaptamos cualquiera de estos programas al sector, necesidades y objetivos estratégicos de su organización. Impartimos capacitaciones en modalidad <strong>In-Company</strong> presencial o mediante <strong>Aula Virtual Exclusiva</strong> para su empresa con precios preferenciales por volumen.
              </p>
              <div className="incompany-btn-group">
                <a
                  href="https://wa.me/593964196795?text=Hola%20BALUARTALENT%20%26%20Co.,%20deseo%20solicitar%20una%20propuesta%20de%20capacitaci%C3%B3n%20In-Company%20para%20mi%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary incompany-wa-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Solicitar Propuesta In-Company
                </a>
                {onOpenContact && (
                  <button onClick={onOpenContact} className="btn btn-secondary incompany-contact-btn">
                    Contactar a un Asesor
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Return to Home Action */}
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

      {/* Interactive Course Details & Syllabus Modal */}
      {activeCourseModal && (
        <div className="course-modal-overlay" onClick={handleCloseCourseModal}>
          <div className="course-modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="course-modal-header" style={{ background: activeCourseModal.gradientBg }}>
              <div className="modal-header-top">
                <div className="modal-category-badges">
                  <span className="course-category-tag" style={{ color: activeCourseModal.colorAccent, background: '#ffffff', borderColor: `${activeCourseModal.colorAccent}40` }}>
                    {activeCourseModal.category}
                  </span>
                  <span className="modal-price-badge">
                    🏷️ Inversión: <strong>{activeCourseModal.price}</strong>
                  </span>
                  {activeCourseModal.badge && (
                    <span className={`course-status-badge badge-${activeCourseModal.badgeType}`}>
                      {activeCourseModal.badge}
                    </span>
                  )}
                </div>
                <button
                  className="course-modal-close"
                  onClick={handleCloseCourseModal}
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
              </div>

              <h2 className="modal-course-title">{activeCourseModal.title}</h2>
              <p className="modal-course-subtitle">{activeCourseModal.shortDesc}</p>

              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <span className="meta-item-label">🏷️ Inversión:</span>
                  <strong style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>{activeCourseModal.price}</strong>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-item-label">⏱️ Duración:</span>
                  <strong>{activeCourseModal.duration}</strong>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-item-label">💻 Modalidad:</span>
                  <strong>{activeCourseModal.modality}</strong>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-item-label">⭐ Calificación:</span>
                  <strong>{activeCourseModal.rating} / 5.0 ({activeCourseModal.reviewsCount} opiniones)</strong>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="course-modal-body">
              
              {/* Instructor Card */}
              <div className="modal-section-card instructor-highlight-card">
                <div className="instructor-card-avatar" style={{ background: `${activeCourseModal.colorAccent}20`, color: activeCourseModal.colorAccent }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <span className="instructor-mini-title">Docente / Facilitador Principal</span>
                  <h4 className="instructor-card-name">{activeCourseModal.instructor}</h4>
                  <p className="instructor-card-role">{activeCourseModal.instructorRole}</p>
                </div>
              </div>

              {/* What you will learn */}
              <div className="modal-section-card">
                <h3 className="modal-section-title">🎯 Temas Clave y Competencias a Desarrollar</h3>
                <ul className="modal-highlights-grid">
                  {activeCourseModal.highlights.map((h, i) => (
                    <li key={i} className="modal-highlight-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: activeCourseModal.colorAccent, flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syllabus breakdown */}
              <div className="modal-section-card">
                <h3 className="modal-section-title">📚 Plan de Estudios y Temario Detallado</h3>
                <div className="syllabus-accordion">
                  {activeCourseModal.syllabus.map((mod, idx) => (
                    <div key={idx} className="syllabus-module-box">
                      <div className="module-box-header" style={{ borderLeftColor: activeCourseModal.colorAccent }}>
                        <span className="module-idx-tag">0{idx + 1}</span>
                        <h4 className="module-title-text">{mod.title}</h4>
                      </div>
                      <ul className="module-topics-list">
                        {mod.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="module-topic-item">
                            <span className="topic-bullet">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Profile & Certification */}
              <div className="modal-two-columns">
                <div className="modal-section-card">
                  <h3 className="modal-section-title">👥 Perfil del Participante</h3>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {activeCourseModal.targetAudience}
                  </p>
                </div>
                <div className="modal-section-card">
                  <h3 className="modal-section-title">📜 Certificación y Respaldo</h3>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {activeCourseModal.certification}
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="course-modal-footer">
              <div className="modal-footer-info">
                <span className="guarantee-text">🏷️ Tarifa promocional: <strong>{activeCourseModal.price}</strong> por participante. Cupos limitados.</span>
              </div>
              <div className="modal-footer-buttons">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseCourseModal}
                >
                  Cerrar
                </button>
                <a
                  href={getWhatsAppLink(activeCourseModal.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary modal-enroll-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Inscribirme vía WhatsApp ({activeCourseModal.price})
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
