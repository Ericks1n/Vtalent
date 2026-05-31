import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CtaBanner from './components/CtaBanner';
import Accordion from './components/Accordion';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Subpages
import QuienesSomos from './components/QuienesSomos';
import NuestrosLideres from './components/NuestrosLideres';
import MisionVision from './components/MisionVision';
import ValoresCorporativos from './components/ValoresCorporativos';
import PorQueElegirnos from './components/PorQueElegirnos';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/quienes-somos') {
        setCurrentView('quienes-somos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/nuestros-lideres') {
        setCurrentView('nuestros-lideres');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/mision-vision') {
        setCurrentView('mision-vision');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/valores-corporativos') {
        setCurrentView('valores-corporativos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/por-que-elegirnos') {
        setCurrentView('por-que-elegirnos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
        // If it's a home anchor scroll, let the browser handle it or scroll to it
        if (hash && !hash.startsWith('#/')) {
          const id = hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'quienes-somos':
        return <QuienesSomos />;
      case 'nuestros-lideres':
        return <NuestrosLideres />;
      case 'mision-vision':
        return <MisionVision />;
      case 'valores-corporativos':
        return <ValoresCorporativos />;
      case 'por-que-elegirnos':
        return <PorQueElegirnos />;
      case 'home':
      default:
        return (
          <>
            <Hero onOpenContact={handleOpenContact} />
            <Services />
            <CtaBanner onOpenContact={handleOpenContact} />
            <Accordion />
            <Blog />
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
      <Footer onOpenContact={handleOpenContact} />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
}

export default App;
