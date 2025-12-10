import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import homeImage from '../src/assets/images/home.jpg';
import agraImage from '../src/assets/images/Agra.jpg';
import dinnerImage from '../src/assets/images/Dinner.jpg';

export default function Home() {
  // Image carousel for "Who we are" section
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageCarousel = [agraImage, dinnerImage, homeImage];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCarousel.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [imageCarousel.length]);

  // Carousel slides data with background images
  const slides = [
    {
      id: 1,
      title: "Welcome to IAESTE LC JECRC",
      subtitle: "Work. Experience. Discover.",
      description: "Empowering students through international exchange programs and professional development opportunities worldwide.",
      buttonText: "Apply Now",
      buttonLink: "/apply",
      backgroundImage: homeImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #005a8f 100%)",
    },
    {
      id: 2,
      title: "Global Opportunities",
      subtitle: "Expand Your Horizons",
      description: "Join thousands of students who have gained valuable international work experience through our exchange programs.",
      buttonText: "Learn More",
      buttonLink: "/benefits",
      backgroundImage: agraImage,
      fallbackGradient: "linear-gradient(135deg, #1e3a5f 0%, #003F68 100%)",
    },
    {
      id: 3,
      title: "Build Your Future",
      subtitle: "Professional Development",
      description: "Develop essential skills, build international networks, and enhance your career prospects with IAESTE.",
      buttonText: "Get Started",
      buttonLink: "/membership",
      backgroundImage: dinnerImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #1e3a5f 100%)",
    },
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: "Career Development",
      description: "Gain real-world exposure by working on innovative projects with companies and research labs abroad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 2,
      title: "Cultural Exchange",
      description: "Adapt to new cultures, build confidence and strengthen your communication and people skills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 3,
      title: "Professional Network",
      description: "Join a global family of alumni, professionals and mentors who can support your future goals.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 4,
      title: "Language Skills",
      description: "Practice new languages and learn how professionals communicate in international environments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 5,
      title: "Lasting Memories",
      description: "Travel with fellow interns, explore iconic places and create unforgettable stories.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 6,
      title: "Competitive Edge",
      description: "Stand out in applications with unique global experience on your resume and LinkedIn.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    }
  ];

  return (
    <div>
      <Carousel slides={slides} />
      
      {/* Who we are & Why IAESTE Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24">
          {/* Who we are Section - Left */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">Who we are</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg font-normal">
                The International Association for the Exchange of Students for Technical Experience (<span className="font-bold text-[#003F68]">IAESTE</span>) is a global, independent, non-profit organisation providing high-quality, paid internships for students in technical, scientific and professional fields.
              </p>
              
              <p className="text-base sm:text-lg font-normal">
                <span className="font-bold text-[#003F68]">IAESTE India LC JECRC</span> is the local committee at <span className="font-bold text-[#003F68]">JECRC University</span>. We connect students with global technical internships, organise workshops and cultural events, and help you build an international network while still on campus.
              </p>
              
              <p className="text-base sm:text-lg font-normal">
                From documentation and visa support to accommodation guidance and cultural trips, our student-run departments handle everything so you can focus on learning, exploring and making memories that stay with you for life.
              </p>
            </div>
            
            {/* Image Carousel */}
            <div className="pt-6 relative overflow-hidden rounded-lg border-4 border-[#003F68] shadow-xl" style={{ height: '500px' }}>
              {imageCarousel.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`IAESTE ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Why IAESTE Section - Right */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
                Why <span className="text-[#003F68]">IAESTE</span> ?
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 leading-relaxed">
                How does <span className="font-bold text-[#003F68]">IAESTE</span> benefit you as a student member?
              </h3>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.id}
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    scale: 0.9
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 transition-all duration-500"
                  style={{
                    boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 63, 104, 0.05)',
                    transform: 'translateZ(0)',
                    willChange: 'transform, box-shadow'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 40px -8px rgba(0, 63, 104, 0.3), 0 12px 24px -6px rgba(0, 63, 104, 0.25), 0 0 0 1px rgba(0, 63, 104, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 63, 104, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <div className={`${benefit.iconColor} mb-3`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-base sm:text-[15px] text-gray-700 leading-[1.7] font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Know More Button */}
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link
                to="/benefits"
                className="inline-flex items-center px-8 py-3 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Know More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
              Membership
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              It takes 2 minutes to get yourself enrolled as a member of this prestigious organization!
            </p>
          </div>

          {/* Membership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* INSTATION Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 border-2 border-[#003F68]/10 hover:border-[#003F68]/30 transition-all duration-300"
              style={{
                boxShadow: '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px -8px rgba(0, 63, 104, 0.25), 0 6px 15px -4px rgba(0, 63, 104, 0.2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#003F68]/10 mb-4">
                  <svg className="w-8 h-8 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003F68]">
                  INSTATION
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Valid for students of <span className="font-semibold text-[#003F68]">JECRC University</span>.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#003F68]/20">
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    <span className="text-[#003F68]">₹2,900</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Valid till graduation
                  </p>
                  <button className="w-full bg-[#003F68] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* OUTSTATION Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 border-2 border-[#003F68]/10 hover:border-[#003F68]/30 transition-all duration-300"
              style={{
                boxShadow: '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px -8px rgba(0, 63, 104, 0.25), 0 6px 15px -4px rgba(0, 63, 104, 0.2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#003F68]/10 mb-4">
                  <svg className="w-8 h-8 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003F68]">
                  OUTSTATION
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Valid for students other than <span className="font-semibold text-[#003F68]">JECRC University</span>.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#003F68]/20">
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    <span className="text-[#003F68]">₹2,000</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Per Year
                  </p>
                  <button className="w-full bg-[#003F68] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Know More Button */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <Link
              to="/membership"
              className="inline-flex items-center px-8 py-3 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Know More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

