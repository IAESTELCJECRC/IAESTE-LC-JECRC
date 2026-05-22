import React from 'react';
import { motion } from 'framer-motion';

export default function Brochure() {
  const brochureTypes = [
    {
      id: 'beyond-borders',
      title: 'Beyond Borders',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Understanding the philosophy and global mission of IAESTE.',
      viewLink: 'https://drive.google.com/file/d/1er3AMoWKIVp081l6J9dTrCL13NjhEiQ_/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1er3AMoWKIVp081l6J9dTrCL13NjhEiQ_', 
    },
    {
      id: 'incoming',
      title: 'Incoming Department',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      description: 'Home Away from Home - Making international interns feel at home.',
      viewLink: '#',
      downloadLink: '#',
    },
    {
      id: 'cra',
      title: 'CRA Department',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Corporate Relations & Alumni - Connecting students with worldwide opportunities.',
      viewLink: 'https://drive.google.com/file/d/1Uq-78Yt8LVNGXSZqY43LAMQWnH2JKuDW/view?usp=sharing',
      downloadLink: '/brochures/CRA_Brochure.pdf',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003F68] mb-3">
            Brochures
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download and explore our comprehensive brochures covering all aspects of IAESTE LC JECRC
          </p>
        </motion.div>

        {/* Brochure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {brochureTypes.map((brochure, index) => (
            <motion.div
              key={brochure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#003F68]/10 rounded-lg flex items-center justify-center text-[#003F68]">
                    {brochure.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{brochure.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{brochure.description}</p>
              </div>
              <div className="p-6">
                <a
                  href={brochure.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={`${brochure.title}.pdf`}
                  className="block w-full bg-[#003F68] text-white text-center py-2.5 rounded-lg font-semibold hover:bg-[#005a8f] transition-colors duration-200"
                >
                  View Brochure
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
        >
          <div className="text-center">
            <div className="w-14 h-14 bg-[#003F68]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">PDF Downloads</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Click below to download any of our brochures as a PDF.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {brochureTypes.map((brochure) => (
                <a
                  key={brochure.id}
                  href={brochure.downloadLink}
                  download={`${brochure.title}.pdf`}
                  className="px-5 py-2 bg-[#003F68] text-white rounded-lg font-medium hover:bg-[#005a8f] transition-colors text-sm"
                >
                  Download {brochure.title}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
