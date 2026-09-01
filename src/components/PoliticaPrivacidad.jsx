import React from 'react';

export default function PoliticaPrivacidad() {
  return (
    <div className="subpage-wrapper">
      {/* Page Header Banner */}
      <header className="subpage-header">
        <div className="bg-blob blob-purple" style={{ top: '-10%', right: '10%' }}></div>
        <div className="bg-blob blob-cyan" style={{ bottom: '-10%', left: '10%' }}></div>
        
        <div className="container">
          <div className="breadcrumbs">
            <a href="#">Inicio</a> &gt; <span className="current">Política de Privacidad</span>
          </div>
          <h1>Política de Privacidad y Protección de Datos</h1>
          <p className="subpage-subtitle">
            Transparencia, seguridad y compromiso en el tratamiento de sus datos personales
          </p>
          <div style={{ marginTop: '1rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <strong>Última actualización:</strong> Agosto de 2026
          </div>
        </div>
      </header>

      {/* Page Content */}
      <section className="subpage-content section-padding" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          {/* Introduction Card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            marginBottom: '2.5rem',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
              En <strong>BALUARTALENT &amp; Co. Consultoría Integral</strong> (en adelante, "<strong>BALUARTALENT</strong>", "nosotros" o "nuestro"), respetamos profundamente su privacidad y estamos plenamente comprometidos con la protección de sus datos personales. La presente Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos, protegemos y compartimos su información cuando visita nuestro sitio web oficial (<a href="https://baluartalent.com" style={{ color: 'var(--primary)', fontWeight: '600' }}>baluartalent.com</a>), interactúa con nuestras campañas publicitarias o solicita información sobre nuestros servicios de Recursos Humanos, Selección de Personal, Gestión de Nómina y Capacitación Corporativa.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: '1.7', color: 'var(--text-muted)', marginTop: '1rem' }}>
              Este documento ha sido estructurado en cumplimiento con la <strong>Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP)</strong>, así como con los estándares internacionales exigidos por plataformas de publicidad digital como <strong>Meta Platforms Inc. (Facebook / Instagram Ads)</strong> y <strong>LinkedIn Ads</strong>.
            </p>
          </div>

          {/* Section 1: Identificación del Responsable */}
          <div className="privacy-section" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>1.</span> Responsable del Tratamiento de los Datos
            </h2>
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: '12px',
              padding: '1.5rem',
              lineHeight: '1.8'
            }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><strong>Razón Comercial:</strong> BALUARTALENT &amp; Co. Consultoría Integral</li>
                <li><strong>Ubicación:</strong> Av. Naciones Unidas E2-30 - entre Iñaquito y Núñez de Vela. Edificio METROPOLITAN, Piso 4, Oficina 413. Quito, Ecuador.</li>
                <li><strong>Teléfono de Contacto:</strong> (+593) 2 3617038 / (+593) 964196795</li>
                <li><strong>Correo Electrónico de Privacidad:</strong> <a href="mailto:administrator@baluartalent.com" style={{ color: 'var(--primary)', fontWeight: '600' }}>administrator@baluartalent.com</a></li>
                <li><strong>Sitio Web:</strong> <a href="https://baluartalent.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>https://baluartalent.com</a></li>
              </ul>
            </div>
          </div>

          {/* Section 2: Datos que recopilamos */}
          <div className="privacy-section" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>2.</span> Datos Personales que Recopilamos
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Recopilamos únicamente los datos necesarios y pertinentes para proporcionarle una asesoría profesional y responder a sus requerimientos empresariales:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
              <div style={{ background: '#ffffff', padding: '1.4rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>a. Datos provistos directamente por usted</h3>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <li>Nombre completo y cargo profesional.</li>
                  <li>Correo electrónico de contacto (corporativo o personal).</li>
                  <li>Número telefónico o de WhatsApp.</li>
                  <li>Nombre de su empresa u organización.</li>
                  <li>Información sobre perfiles a reclutar o servicios requeridos.</li>
                </ul>
              </div>
              <div style={{ background: '#ffffff', padding: '1.4rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>b. Datos recopilados automáticamente</h3>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <li>Dirección de Protocolo de Internet (IP).</li>
                  <li>Tipo de navegador web y versión del sistema operativo.</li>
                  <li>Páginas consultadas dentro de nuestro portal y tiempo de visita.</li>
                  <li>Datos anónimos de interacción y parámetros de campañas publicitarias.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Finalidades del tratamiento */}
          <div className="privacy-section" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>3.</span> Finalidad y Uso de los Datos
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Sus datos son tratados con los siguientes propósitos legítimos:
            </p>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                <li><strong>Atención Comercial y Asesorías:</strong> Gestionar solicitudes de contacto, reuniones de diagnóstico y propuestas de servicios de talento humano.</li>
                <li><strong>Prestación de Servicios:</strong> Ejecución de procesos de selección de personal, auditoría de nómina, capacitaciones y consultoría empresarial.</li>
                <li><strong>Comunicaciones Informativas:</strong> Envío de novedades del sector laboral, programas de formación y ofertas de servicios corporativos (siempre con la posibilidad de cancelar la suscripción).</li>
                <li><strong>Optimización Publicitaria y Analítica:</strong> Evaluar la efectividad de nuestras campañas de marketing en plataformas como Meta Ads (Facebook/Instagram) y LinkedIn Ads, optimizando los anuncios dirigidos a audiencias profesionales interesadas en soluciones de RRHH.</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Cookies, Píxeles de Rastreo y Publicidad Digital */}
          <div className="privacy-section" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>4.</span> Cookies, Píxeles de Rastreo y Publicidad Digital
            </h2>
            <div style={{ background: 'rgba(30, 64, 175, 0.03)', border: '1px solid var(--border-glow)', padding: '1.6rem', borderRadius: '12px', marginBottom: '1.2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                Nuestro sitio web utiliza cookies técnicas y píxeles de conversión de terceros para mejorar la navegación y medir el rendimiento publicitario:
              </p>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                <li style={{ marginBottom: '0.6rem' }}>
                  <strong>Meta Pixel (Facebook / Instagram):</strong> Herramienta provista por Meta Platforms Inc. que nos permite medir la efectividad de los anuncios mediante la comprensión de las acciones que las personas realizan en nuestro sitio web. Los datos recopilados son anónimos para nosotros, pero Meta puede asociarlos a su cuenta de usuario conforme a sus políticas de privacidad.
                </li>
                <li style={{ marginBottom: '0.6rem' }}>
                  <strong>LinkedIn Insight Tag / LinkedIn Ads:</strong> Tecnología de LinkedIn Ireland Unlimited Company que permite registrar conversiones, retargeting a visitantes de nuestro sitio web y obtener información sobre los miembros de LinkedIn que interactúan con nuestros anuncios.
                </li>
                <li>
                  <strong>Cookies de sesión y técnicas:</strong> Necesarias para el correcto funcionamiento y navegación segura en baluartalent.com.
                </li>
              </ul>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <em>Control de cookies:</em> Usted puede en cualquier momento restringir, bloquear o borrar las cookies configurando las opciones de su navegador de Internet (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge). Tenga en cuenta que la desactivación de cookies no impedirá el acceso general al contenido del sitio web.
            </p>
          </div>

          {/* Section 5: Base Legal y Compartición de Datos */}
          <div className="privacy-section" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>5.</span> Base de Legitimación y Transferencia de Datos
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              El tratamiento de sus datos se sustenta en:
            </p>
            <ul style={{ paddingLeft: '1.4rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1rem' }}>
              <li><strong>Su consentimiento expreso:</strong> Otorgado al enviar formularios de contacto, solicitar asesorías o aceptar el uso de cookies.</li>
              <li><strong>Interés legítimo y relación precontractual/contractual:</strong> Para el envío de cotizaciones comerciales y la ejecución de los servicios solicitados.</li>
            </ul>
            <div style={{ background: '#ffffff', padding: '1.4rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <p style={{ fontWeight: '600', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                Garantía de No Comercialización:
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                <strong>BALUARTALENT &amp; Co. NO vende, alquila, comercializa ni cede sus datos personales a terceros</strong> para fines ajenos a los servicios aquí descritos. Únicamente transferimos datos a proveedores de servicios tecnológicos (como servicios de hosting y procesadores de correo) bajo estrictos acuerdos de confidencialidad y medidas de seguridad.
              </p>
            </div>
          </div>

          {/* Section 6: Derechos ARCO y LOPDP */}
          <div className="privacy-section" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>6.</span> Derechos del Titular de los Datos (Derechos ARCO)
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Conforme a la Ley Orgánica de Protección de Datos Personales, usted como titular tiene derecho a:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>Acceso</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Conocer qué datos personales suyos conservamos y tratamos.</span>
              </div>
              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>Rectificación</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Actualizar o corregir datos inexactos o incompletos.</span>
              </div>
              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>Eliminación</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Solicitar la supresión de sus datos cuando ya no sean requeridos.</span>
              </div>
              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>Oposición</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Oponerse al tratamiento de sus datos para fines de prospección comercial.</span>
              </div>
            </div>
            <div style={{ background: 'rgba(13, 148, 136, 0.05)', border: '1px solid rgba(13, 148, 136, 0.2)', padding: '1.4rem', borderRadius: '12px' }}>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                Para ejercer cualquiera de estos derechos, basta con enviar una solicitud escrita a nuestro Oficial de Privacidad al correo: <a href="mailto:administrator@baluartalent.com?subject=Solicitud%20de%20Derechos%20de%20Privacidad" style={{ color: 'var(--secondary)', fontWeight: '700' }}>administrator@baluartalent.com</a> indicando su nombre, documento de identidad y el derecho que desea ejercer. Responderemos a su solicitud en los plazos legalmente establecidos.
              </p>
            </div>
          </div>

          {/* Section 7: Seguridad y Conservación */}
          <div className="privacy-section" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>7.</span> Seguridad y Tiempo de Conservación
            </h2>
            <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
              Implementamos protocolos técnicos, administrativos y organizativos de seguridad (incluyendo certificados de cifrado SSL/HTTPS y cortafuegos) para proteger su información contra pérdida, alteración, uso no autorizado o accesos ilícitos.
            </p>
            <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
              Conservamos sus datos personales únicamente durante el tiempo indispensable para cumplir con las finalidades descritas, resolver consultas comerciales y atender requerimientos legales, tributarios o laborales aplicables en la República del Ecuador.
            </p>
          </div>

          {/* Section 8: Modificaciones */}
          <div className="privacy-section" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>8.</span> Modificaciones a esta Política
            </h2>
            <p style={{ lineHeight: '1.7', color: 'var(--text-main)' }}>
              BALUARTALENT &amp; Co. se reserva el derecho de modificar o actualizar periódicamente esta Política de Privacidad para adecuarla a novedades normativas, jurisprudenciales o tecnológicas. Cualquier cambio será publicado de forma inmediata en esta misma página web con la indicación de la fecha de última actualización.
            </p>
          </div>

          {/* Back Button */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="#" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              Volver a la Página Principal
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
