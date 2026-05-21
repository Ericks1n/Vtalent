import React from 'react';

const BLOG_POSTS = [
  {
    title: 'Claves para atraer y seleccionar el mejor talento en Quito en 2026',
    description: 'Descubre las tendencias del mercado laboral quiteño y cómo estructurar procesos de reclutamiento eficientes para puestos clave.',
    link: '#reclutamiento-quito',
    bg: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <line x1="19" y1="8" x2="19" y2="14"></line>
        <line x1="22" y1="11" x2="16" y2="11"></line>
      </svg>
    )
  },
  {
    title: 'Guía de Nómina en Ecuador: Cálculo de Beneficios y Obligaciones del IESS',
    description: 'Todo lo que debes saber sobre el cálculo del décimo tercer y cuarto sueldo, fondos de reserva y aportaciones patronales.',
    link: '#nomina-ecuador',
    bg: 'linear-gradient(135deg, #0d9488 0%, #1e3a8a 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: 'Cómo mejorar el clima y fidelizar al personal en equipos de trabajo',
    description: 'Estrategias prácticas de Recursos Humanos para reducir la rotación laboral y potenciar el compromiso de tus colaboradores.',
    link: '#clima-laboral',
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #f59e0b 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
        <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-10-10z"></path>
        <path d="M12 6v6l4 2"></path>
      </svg>
    )
  }
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding" style={{ position: 'relative' }}>
      <div className="bg-blob blob-pink" style={{ bottom: '-10%', right: '5%' }}></div>
      <div className="container">
        <div className="services-header">
          <h2>Blog de Gestión y Talento Humano</h2>
          <p>
            Compartimos artículos sobre Reclutamiento, Selección, Legislación Laboral en Ecuador y Clima Organizacional para mantenerte al día.
          </p>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-card-image" style={{ background: post.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '220px', transition: 'var(--transition-smooth)' }}>
                {post.icon}
              </div>
              <div className="blog-card-content">
                <h3>
                  <a href={post.link}>{post.title}</a>
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                  {post.description}
                </p>
                <a href={post.link} className="blog-readmore">
                  Leer más
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
