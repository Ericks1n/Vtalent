import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@baluartalent.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          "Teléfono / WhatsApp": formData.phone,
          Mensaje: formData.message,
          _subject: "Nuevo lead de contacto - Baluartalent"
        })
      });
      
      const result = await response.json();
      if (response.ok && result.success === "true") {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
          onClose();
        }, 3000);
      } else {
        throw new Error(result.message || "Ocurrió un error al enviar el formulario.");
      }
    } catch (err) {
      setError("No se pudo enviar el mensaje. Por favor, intenta de nuevo o escríbenos directamente a info@baluartalent.com.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(6, 182, 212, 0.1)',
              color: 'var(--secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '1.8rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>¡Solicitud Recibida!</h3>
            <p style={{ marginTop: '0.5rem' }}>Nos comunicaremos contigo a la brevedad posible para coordinar tu asesoría de talento.</p>
          </div>
        ) : (
          <>
            <h3>¡Agenda tu asesoría gratuita!</h3>
            <p>Déjanos tus datos y un consultor de Recursos Humanos te contactará en menos de 24 horas.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="modal-name">Nombre Completo</label>
                <input
                  type="text"
                  id="modal-name"
                  required
                  className="form-input"
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-email">Correo Electrónico Corporativo</label>
                  <input
                    type="email"
                    id="modal-email"
                    required
                    className="form-input"
                    placeholder="ejemplo@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-phone">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    id="modal-phone"
                    required
                    className="form-input"
                    placeholder="Ej. +593 99 999 9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="modal-message">Detalles de tu Necesidad de Personal</label>
                <textarea
                  id="modal-message"
                  required
                  rows="3"
                  className="form-input"
                  placeholder="Cuéntanos sobre los perfiles que buscas reclutar o el servicio de Recursos Humanos que requiere tu empresa..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              {error && (
                <div style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: '500', textAlign: 'center' }}>
                  {error}
                </div>
              )}
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
