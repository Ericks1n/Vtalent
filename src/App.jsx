import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AreasDesarrollo from './components/AreasDesarrollo';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Subpages
import NuestrosLideres from './components/NuestrosLideres';
import MisionVision from './components/MisionVision';
import ValoresCorporativos from './components/ValoresCorporativos';
import PlanDeAccion from './components/PlanDeAccion';
import ModeloDesarrollo from './components/ModeloDesarrollo';
import GestionNomina from './components/GestionNomina';
import AsesoriaJuridica from './components/AsesoriaJuridica';
import CapacitacionCorporativa from './components/CapacitacionCorporativa';
import Cursos from './components/Cursos';

export const scrollToSection = (targetId, smooth = true) => {
  if (!targetId || targetId === 'inicio' || targetId === 'top') {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' });
    return;
  }
  const element = document.getElementById(targetId);
  if (element) {
    const nav = document.querySelector('.navbar');
    const navHeight = nav ? nav.offsetHeight : 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight - 15;
    window.scrollTo({
      top: offsetPosition,
      behavior: smooth ? 'smooth' : 'instant'
    });
  }
};

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const pendingScrollRef = useRef(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/nuestros-lideres') {
        setCurrentView('nuestros-lideres');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/mision-vision') {
        setCurrentView('mision-vision');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/valores-corporativos') {
        setCurrentView('valores-corporativos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/plan-de-accion') {
        setCurrentView('plan-de-accion');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/modelo-de-desarrollo') {
        setCurrentView('modelo-de-desarrollo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/gestion-de-nomina') {
        setCurrentView('gestion-de-nomina');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/asesoria-juridica-legal') {
        setCurrentView('asesoria-juridica-legal');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/capacitacion-corporativa') {
        setCurrentView('capacitacion-corporativa');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/cursos') {
        setCurrentView('cursos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        const id = hash && !hash.startsWith('#/') ? hash.substring(1) : null;
        setCurrentView((prev) => {
          if (prev !== 'home') {
            pendingScrollRef.current = id;
            return 'home';
          }
          if (id) {
            scrollToSection(id, true);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return 'home';
        });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // When returning from a subpage to home, immediately scroll to the target section once home mounts
  useEffect(() => {
    if (currentView === 'home') {
      if (pendingScrollRef.current) {
        const targetId = pendingScrollRef.current;
        pendingScrollRef.current = null;
        const timer = setTimeout(() => {
          scrollToSection(targetId, true);
        }, 40);
        return () => clearTimeout(timer);
      }
    }
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'nuestros-lideres':
        return <NuestrosLideres />;
      case 'mision-vision':
        return <MisionVision />;
      case 'valores-corporativos':
        return <ValoresCorporativos />;
      case 'plan-de-accion':
        return <PlanDeAccion />;
      case 'modelo-de-desarrollo':
        return <ModeloDesarrollo />;
      case 'gestion-de-nomina':
        return <GestionNomina />;
      case 'asesoria-juridica-legal':
        return <AsesoriaJuridica />;
      case 'capacitacion-corporativa':
        return <CapacitacionCorporativa />;
      case 'cursos':
        return <Cursos onOpenContact={handleOpenContact} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <WhyUs />
            <AreasDesarrollo />
            <Services />
            <Clients />
          </>
        );
    }
  };

  return (
    <>
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
}

export default App;

