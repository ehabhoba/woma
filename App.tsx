
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * The main application component.
 * It structures the entire page by assembling all the individual components
 * like Header, Hero, Shop, Gallery, WhyUs, About, Contact, and Footer in the correct order.
 * @returns {JSX.Element} The fully rendered single-page application.
 */
function App() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto px-4">
        <Hero />
        <Shop />
        <Gallery />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
