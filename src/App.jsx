import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Benefits from '../pages/Benefits';
import Membership from '../pages/Membership';
import Department from '../pages/Department';
import Team from '../pages/Team';
import Join from '../pages/Join';
import Outgoing from '../pages/Outgoing';
import Incoming from '../pages/Incoming';
import LoadingScreen from '../components/LoadingScreen';

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
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/department" element={<Department />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<Join />} />
            <Route path="/testimonials/outgoing" element={<Outgoing />} />
            <Route path="/testimonials/incoming" element={<Incoming />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
