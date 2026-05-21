import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CtaBanner from './components/CtaBanner';
import Accordion from './components/Accordion';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <>
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Services />
        <CtaBanner onOpenContact={handleOpenContact} />
        <Accordion />
        <Blog />
      </main>
      <Footer onOpenContact={handleOpenContact} />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
}

export default App;
