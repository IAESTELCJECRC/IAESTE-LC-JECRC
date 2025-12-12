import React, { useState } from 'react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is IAESTE?",
      answer: "IAESTE (International Association for the Exchange of Students for Technical Experience) is a global organization that provides paid technical internships for students. It connects students with international work opportunities in their field of study."
    },
    {
      id: 2,
      question: "Who can apply for IAESTE internships?",
      answer: "Students enrolled in technical, scientific, or professional degree programs can apply. You must be a member of IAESTE LC JECRC and meet the specific requirements of each internship opportunity."
    },
    {
      id: 3,
      question: "How long do internships last?",
      answer: "Internship durations vary, typically ranging from 6 weeks to 12 months, depending on the specific opportunity and host organization's requirements."
    },
    {
      id: 4,
      question: "Are the internships paid?",
      answer: "Yes, IAESTE internships are paid. The salary varies by country and organization, but it's designed to cover living expenses during your stay."
    },
    {
      id: 5,
      question: "What support does IAESTE LC JECRC provide?",
      answer: "We provide comprehensive support including application assistance, visa documentation help, accommodation guidance, cultural orientation, and ongoing support throughout your internship experience."
    },
    {
      id: 6,
      question: "How do I become a member?",
      answer: "You can become a member by visiting our membership page and choosing between INSTATION (for JECRC University students) or OUTSTATION (for other students) membership plans."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 sm:mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#003F68] focus:ring-offset-2 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-[#003F68] flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

