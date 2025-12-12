import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Benefits from '../pages/Benefits';
import Membership from '../pages/Membership';
import LoadingScreen from '../components/LoadingScreen';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
