import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    { question: "What is IAESTE", answer: "IAESTE is an international student exchange organisation offering paid technical internships across the world." },
    { question: "Who Can join IAESTE LC JECRC", answer: "Any JECRC University student interested in internships and exchange programs." },
    { question: "Who Can join IAESTE LC JECRC", answer: "Students from all branches who fulfil the criteria and selection process." },
    { question: "Who Can join IAESTE LC JECRC", answer: "Students who want global exposure and technical experience abroad." },
    { question: "Who Can join IAESTE LC JECRC", answer: "Dedicated students willing to participate actively in events and exchange processes." },
    { question: "Who Can join IAESTE LC JECRC", answer: "First–third year students depending on availability and eligibility." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* PAGE REVEAL EFFECT */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Heading */}
                <div className="w-full flex flex-col items-center mt-24">
                    <h1 className="text-4xl font-bold text-[#0A3A60] tracking-wide drop-shadow-md">
                        Frequently Asked Question
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm">Every Thing You Need To Know</p>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto mt-10 mb-20 px-4 space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => toggleFAQ(index)}
                                className={`
                                    bg-white/80 backdrop-blur-xl rounded-xl cursor-pointer
                                    border border-gray-100 transition-all duration-300
                                    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                                    hover:shadow-[0_18px_35px_rgba(0,0,0,0.18)]
                                    hover:-translate-y-1 hover:scale-[1.015]
                                    ${isOpen ? "shadow-[0_25px_40px_rgba(0,63,104,0.18)] scale-[1.01] border-[#003F68]/30" : ""}
                                `}
                            >
                                {/* Question Row */}
                                <div className="flex justify-between items-center px-6 py-5 select-none">
                                    <p className="text-[16px] font-semibold text-gray-800">
                                        {faq.question}
                                    </p>

                                    <span
                                        className={`
                                            transition-all duration-500 text-gray-600 transform
                                            ${isOpen ? "rotate-180 scale-125 text-[#003F68]" : "scale-100"}
                                        `}
                                    >
                                        ▼
                                    </span>
                                </div>

                                {/* ANSWER SECTION WITH FADE + SLIDE EFFECT */}
                                <div
                                    className={`
                                        px-6 overflow-hidden transition-all duration-500 ease-in-out
                                        ${isOpen ? "max-h-40 pb-5" : "max-h-0 pb-0"}
                                    `}
                                >
                                    <p
                                        className={`
                                            text-gray-700 text-sm leading-relaxed transition-all duration-500
                                            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
                                        `}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </>
    );
};

export default FAQ;
