import React from 'react';
import { motion } from 'framer-motion';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

const ProcessIcon = ({ children }) => (
    <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#003F68] to-[#0d6ea4] text-white shadow-xl shadow-[#003F68]/15">
        {children}
    </div>
);

const EmployerStepCard = ({ number, title, description, icon, isReverse, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-8 mb-12 group`}
        >
            <div className="w-full md:w-[34%] relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6fd] border border-[#003F68]/10 p-8 flex items-center justify-center min-h-[220px] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-blue-500/15 transition-colors" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#003F68]/10 rounded-full blur-3xl -ml-12 -mb-12 group-hover:bg-[#003F68]/15 transition-colors" />

                <div className="z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    {icon}
                </div>

                <div className="absolute top-5 left-5 text-[72px] font-black text-[#003F68]/6 leading-none select-none">
                    {number}
                </div>
            </div>

            <div className={`w-full md:w-[66%] flex flex-col justify-center ${isReverse ? 'md:pr-8' : 'md:pl-8'} py-4`}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.3 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[3px] bg-blue-500 rounded-full" />
                        <span className="text-blue-500 font-black text-xs uppercase tracking-[0.32em]">Step {number}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#003F68] mb-4 leading-tight tracking-tighter uppercase transition-colors group-hover:text-blue-600">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-medium max-w-2xl">
                        {description}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

const EmployerHireSection = () => {
    const steps = [
        {
            number: "01",
            title: "Register a corporate internship offer",
            description: "Share your internship opportunity with IAESTE LC JECRC and let us open it to a trusted international network of technical students and recent graduates.",
            icon: (
                <ProcessIcon>
                    <WorkOutlineRoundedIcon sx={{ fontSize: 42 }} />
                </ProcessIcon>
            ),
            isReverse: false
        },
        {
            number: "02",
            title: "Define the internship details",
            description: "Set the role, internship mode, duration, stipend, and any additional requirements so the opportunity is positioned clearly for the right candidates.",
            icon: (
                <ProcessIcon>
                    <AssignmentOutlinedIcon sx={{ fontSize: 42 }} />
                </ProcessIcon>
            ),
            isReverse: true
        },
        {
            number: "03",
            title: "Sign the collaboration agreement",
            description: "Formalize the association through a Memorandum of Agreement with IAESTE India LC JECRC outlining the collaboration terms for both parties.",
            icon: (
                <ProcessIcon>
                    <HandshakeOutlinedIcon sx={{ fontSize: 42 }} />
                </ProcessIcon>
            ),
            isReverse: false
        },
        {
            number: "04",
            title: "Review and select candidates",
            description: "We share shortlisted international profiles with you. Your team can review, interview, and choose the intern who best fits the project and culture.",
            icon: (
                <ProcessIcon>
                    <ManageSearchRoundedIcon sx={{ fontSize: 42 }} />
                </ProcessIcon>
            ),
            isReverse: true
        },
        {
            number: "05",
            title: "Welcome the intern onboard",
            description: "Once selected, bring the intern into your team while IAESTE supports smooth coordination, communication, and onboarding throughout the journey.",
            icon: (
                <ProcessIcon>
                    <GroupsRoundedIcon sx={{ fontSize: 42 }} />
                </ProcessIcon>
            ),
            isReverse: false
        }
    ];

    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-[#003F68] uppercase tracking-tighter mb-3">
                        How The <span className="text-blue-500">Process Works</span>
                    </h2>
                    <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                        Structured support from offer to onboarding
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <EmployerStepCard key={index} {...step} delay={index * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployerHireSection;
