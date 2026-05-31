import React from 'react';

export default function Clients() {
  const CLIENTS_DATA = [
    {
      name: 'INCORSEM CIA. LTDA',
      text: 'Basados en nuestra experiencia recomendamos con total confianza a BALUARTALENT & Co. que busque transformar su gestión de recursos humanos en una ventaja competitiva sostenible.',
      category: 'Logística & Servicios',
      logoInitials: 'IN'
    },
    {
      name: 'ACCIONA CONSTRUCCIÓN',
      text: 'Como Acciona Construcción, certificamos que BALUARTALENT & Co. ha demostrado ser una organización con los más altos estándares de profesionalismo, ética y eficiencia.',
      category: 'Infraestructura & Construcción',
      logoInitials: 'AC'
    },
    {
      name: 'SEMEG CIA. LTDA.',
      text: 'SEMEG, expresa su total satisfacción y recomienda ampliamente a la firma consultora BALUARTALENT & Co. por su excelente servicio en gestión integral de Talento Humano.',
      category: 'Salud & Servicios Médicos',
      logoInitials: 'SM'
    },
    {
      name: 'ICESA S.A.',
      text: 'Otorgamos esta recomendación con total confianza a las empresas que busquen un aliado confiable para potenciar y blindar su talento.',
      category: 'Comercial & Distribución',
      logoInitials: 'IC'
    }
  ];

  return (
    <section id="clientes" className="section-padding" style={{ position: 'relative', background: '#F8FAFC' }}>
      <div className="bg-blob blob-purple" style={{ top: '20%', right: '-10%', opacity: 0.08 }}></div>
      <div className="bg-blob blob-cyan" style={{ bottom: '10%', left: '-10%', opacity: 0.08 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="services-header" style={{ marginBottom: '4rem' }}>
          <span className="section-subtitle" style={{ marginBottom: '1.5rem', background: 'rgba(30, 64, 175, 0.1)', color: 'var(--primary)' }}>NUESTROS CLIENTES</span>
          <h2>Opiniones de Empresas que Confían en Nosotros</h2>
          <p>
            Trabajamos junto a organizaciones de diversos sectores para potenciar y blindar su capital humano.
          </p>
        </div>

        <div className="clients-grid">
          {CLIENTS_DATA.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-header">
                <div className="client-logo-placeholder">
                  {client.logoInitials}
                </div>
                <div className="client-meta">
                  <h3>{client.name}</h3>
                  <span>{client.category}</span>
                </div>
              </div>
              <div className="client-quote-mark">“</div>
              <p className="client-text">{client.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
