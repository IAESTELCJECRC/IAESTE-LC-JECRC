import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmployerHireSection from '../components/EmployerHireSection';

const hostingReasons = [
  'Strengthen the intercultural competencies of your team.',
  'Support your Corporate Social Responsibility goals through global exchange.',
  'Bring an international dimension into your workplace culture.',
  'Access students and recent graduates from Science, Engineering, and Applied Arts.',
  'Connect with talent from 100+ countries and 1000+ universities.',
  'Receive carefully screened candidates verified through the IAESTE network.',
];

const internshipDetails = [
  { title: 'Internship Role', description: 'Define the technical work, team, and expected contribution.' },
  { title: 'Mode', description: 'Specify whether the internship is onsite, hybrid, or remote.' },
  { title: 'Duration', description: 'Plan engagements from short projects to longer internships.' },
  { title: 'Stipend', description: 'Offer fair financial support for the intern during the placement.' },
  { title: 'Additional Details', description: 'Share skills, tools, and any project-specific expectations.' },
];

const supportPoints = [
  'Candidate shortlisting and profile sharing',
  'Documentation and coordination support',
  'Interview facilitation with shortlisted applicants',
  'Onboarding guidance throughout the internship journey',
];

export default function Employers() {
  const [activeTab, setActiveTab] = useState('incoming');

  const incomingTestimonials = [
    {
      id: 1,
      name: 'Irene Ramírez Zumaquero',
      location: 'Spain',
      testimonial: 'My internship experience was truly memorable, both professionally and personally. The team fostered a welcoming environment that felt like a family, making it easy to connect, collaborate, and grow. Alongside learning and contributing, I genuinely enjoyed the journey. It was a perfect balance of work and fun.',
      image: '../src/assets/Interns/Irene.avif',
    },
    {
      id: 2,
      name: 'Marcin Sochacki',
      location: 'Czech Republic',
      testimonial: 'This internship was a truly enriching experience that contributed to both my professional and personal growth. The supportive environment encouraged learning, creativity, and collaboration. I had the opportunity to take on meaningful responsibilities and learn from constant guidance. Overall, it was a rewarding journey that strengthened my skills and confidence for the future.',
      image: '../src/assets/Interns/Marcin.avif',
    },
    {
      id: 3,
      name: 'Tasuku Nagata',
      location: 'Japan',
      testimonial: 'This internship began as a short summer project but evolved into an intensive learning experience. I strengthened my understanding of network protocols and inter-process communication while building my first machine learning application. Despite time constraints, I implemented core components with guidance from my mentor Rahul and gained valuable hands-on experience.',
      image: '../src/assets/Interns/tasuku.avif',
    },
  ];

  const outgoingTestimonials = [
    {
      id: 1,
      name: 'Vikram Saini',
      location: 'Burundi',
      testimonial: 'I completed a remote IAESTE internship with IAESTE Burundi. I developed a website using React, Tailwind CSS, and Node.js, which enhanced my technical expertise and understanding of global work culture.',
      image: '../src/assets/images/Team/Vikram.avif',
    },
    {
      id: 2,
      name: 'Priyansh Singh',
      location: 'Colombia',
      testimonial: 'My internship with Universidad Santo Tomás, Colombia was highly enriching. I worked on smart-tourism projects, creating 3D character models and WebAR prototypes using Blender and 8th Wall.',
      image: '../src/assets/Interns/Priyansh.avif',
    },
    {
      id: 3,
      name: 'Nakul Kandira',
      location: 'Brazil',
      testimonial: 'I worked on an AI and Machine Learning project focused on drug discovery. Along with professional learning, I explored beautiful places like Rio de Janeiro, experiencing the vibrant culture of Brazil.',
      image: '../src/assets/Interns/Nakul.avif',
    },
  ];

  const testimonials = activeTab === 'incoming' ? incomingTestimonials : outgoingTestimonials;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden bg-[#003F68] text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.24),transparent_30%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.7px, transparent 0.7px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.34em] text-blue-100 "
              >
                Corporate Collaboration
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-normal"
              >
                Host 
                <br/>
                <span className="text-blue-200">International</span>
                <br />
                Interns With
                <br />
                <span className="text-blue-300">IAESTE LC JECRC</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/85"
              >
                Bring global talent into your organization through a structured internship program supported by IAESTE. We help employers connect with motivated students and recent graduates from leading universities across the world.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#003F68] shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Start a Collaboration
                </a>
                <a
                  href="#why-host"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                >
                  Explore the Benefits
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '100+', label: 'Countries' },
                { value: '1000+', label: 'Universities' },
                { value: '3000+', label: 'IAESTE Employers' },
                { value: 'Global', label: 'Verified Talent Pool' },
              ].map((item) => (
                <div key={item.label} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm shadow-xl shadow-black/5">
                  <p className="text-3xl md:text-4xl font-black uppercase">{item.value}</p>
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.26em] text-blue-100">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="why-host" className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.36em] text-blue-500">Why Host IAESTE Interns</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight text-[#003F68]">
              Why Employers Choose
              <span className="text-blue-500"> IAESTE</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-600">
              IAESTE placements bring global perspective, trusted screening, and a smoother collaboration process so your team can focus on meaningful work instead of operational friction.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {hostingReasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-[2rem] border border-[#003F68]/8 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003F68] text-white shadow-lg shadow-[#003F68]/10 transition group-hover:bg-blue-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-5 text-base font-medium leading-relaxed text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="rounded-[2.5rem] border border-[#003F68]/8 bg-gradient-to-br from-white via-[#f9fbfe] to-[#eef6fd] p-8 md:p-10 lg:p-12 shadow-xl shadow-[#003F68]/5">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.36em] text-blue-500">Internship Brief</p>
                <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight text-[#003F68]">
                  Build The Offer.
                  <br />
                  We Handle The Flow.
                </h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-600">
                  When registering an internship offer, we only need the essentials. Once the brief is in place, IAESTE LC JECRC supports the next stages of coordination and candidate matching.
                </p>

                <div className="mt-8 rounded-[2rem] bg-[#003F68] p-8 text-white shadow-xl">
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-blue-100">IAESTE Support</p>
                  <ul className="mt-5 space-y-4">
                    {supportPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-white/90">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {internshipDetails.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-[#003F68]/8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-blue-500">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-[#003F68]">{detail.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{detail.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmployerHireSection />

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003F68]">Internship Stories</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#003F68]">
              Real outcomes from the IAESTE exchange network.
            </h2>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            {['incoming', 'outgoing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeTab === tab
                    ? 'bg-[#003F68] text-white shadow-lg'
                    : 'bg-white text-[#003F68] ring-1 ring-[#003F68]/15 hover:bg-[#003F68]/5'
                }`}
              >
                {tab === 'incoming' ? 'Incoming Interns' : 'Outgoing Interns'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-[#003F68]">{testimonial.name}</h3>
                      <p className="text-sm font-medium text-blue-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="mt-6 flex-1 text-gray-600 leading-relaxed">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#003F68] to-[#0d6ea4] p-8 md:p-12 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Partner With IAESTE LC JECRC</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Welcome international interns onboard and take your company global.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
              From the first offer form to the final onboarding steps, IAESTE ensures smooth coordination and employer support throughout the collaboration.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#003F68] transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Contact IAESTE LC JECRC
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
