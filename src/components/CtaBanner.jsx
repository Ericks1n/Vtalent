import React from 'react';

export default function CtaBanner({ onOpenContact }) {
  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="cta-banner">
          <div className="cta-grid">
            <div className="cta-content">
              <h2>¿Buscas optimizar la gestión de tu personal?</h2>
              <p>Ofrecemos soluciones flexibles de Recursos Humanos y Outsourcing de Nómina adaptadas al tamaño y sector de tu empresa.</p>
              <button className="btn btn-primary" onClick={onOpenContact}>
                ¡Agenda una asesoría!
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            <div className="cta-image">
              <img 
                src="/cta_consulting.png" 
                alt="Asesoría en Recursos Humanos BALUARTALENT & Co." 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
