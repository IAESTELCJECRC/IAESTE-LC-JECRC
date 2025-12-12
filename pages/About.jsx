import React from 'react';
import TeamGrid from '../components/TeamGrid';
import FAQAccordion from '../components/FAQAccordion';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003F68] to-[#005a8f] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About IAESTE LC JECRC
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-white/90">
              IAESTE LC JECRC is the local committee of IAESTE at JECRC University. We are dedicated to providing students with life-changing international internship opportunities, fostering cultural exchange, and building a global network of professionals.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-white/90 mt-4">
              Our mission is to empower students through technical experience, cultural immersion, and professional development, creating leaders who are ready to make a difference in the global community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamGrid />

      {/* FAQ Section */}
      <FAQAccordion />
    </div>
  );
}


