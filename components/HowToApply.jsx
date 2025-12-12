import React from 'react';

export default function HowToApply() {
  const steps = [
    {
      id: 1,
      title: "Step 1: Register",
      description: "Create your account on the IAESTE platform and complete your profile with your academic and professional details."
    },
    {
      id: 2,
      title: "Step 2: Browse Opportunities",
      description: "Explore available internships from our partner organizations worldwide and find the perfect match for your skills and interests."
    },
    {
      id: 3,
      title: "Step 3: Apply & Get Selected",
      description: "Submit your application, attend interviews if required, and once selected, we'll help you with all the necessary documentation and travel arrangements."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            HOW TO APPLY FOR AN IAESTE INTERNSHIP
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            3 simple steps and you're good to go!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-[#003F68] text-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">
                {step.id}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

