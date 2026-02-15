import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Catalogue from './components/Catalogue';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

const App = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <Catalogue />
      <Portfolio />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;