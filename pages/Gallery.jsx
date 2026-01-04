// src/pages/Gallery.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close"; // You might need to install/import this or use text
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import images from assets (Corrected paths)
import dinnerImg from "../src/assets/images/Dinner.jpg";
import memberDriveImg from "../src/assets/images/imgv1.jpeg";
import workshopImg from "../src/assets/images/home.jpg";
import agraImg from "../src/assets/images/Agra.jpg";
import img1 from "../src/assets/images/1.jpeg";
import img2 from "../src/assets/images/imgv2.jpg";
import img3 from "../src/assets/images/imgv3.jpg";
import img4 from "../src/assets/images/imgv4.jpg";
import img5 from "../src/assets/images/imgv5.jpg";
import img6 from "../src/assets/images/imgv6.jpg";
import img7 from "../src/assets/images/imgv7.jpg";
import img8 from "../src/assets/images/imgv8.jpg";
import img9 from "../src/assets/images/imgv9.jpg";
import img10 from "../src/assets/images/imgv10.jpg";
import img12 from "../src/assets/images/imgv12.jpg";
import img14 from "../src/assets/images/imgv14.jpg";
import img15 from "../src/assets/images/imgv15.jpg";

// --- Components ---

const CategoryStrip = ({ category, onSelect, isActive, isAnyActive }) => {
    return (
        <motion.div
            layout
            onClick={() => onSelect(category)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className={`relative h-[40vh] md:h-[70vh] cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? "flex-[10]" : "flex-[1] -translate-y-0"
                } ${!isActive && isAnyActive ? "opacity-50 grayscale" : "opacity-100 grayscale-0"}`}
            style={{
                background: `url(${category.image}) center/cover no-repeat`,
                minWidth: "60px"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 hover:bg-black/40" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end items-start text-white">
                <motion.h2
                    layout="position"
                    className={`font-black text-2xl md:text-4xl uppercase tracking-tighter transition-transform duration-500Origin-left ${!isActive ? "md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8" : "rotate-0"
                        } whitespace-nowrap`}
                >
                    {category.name}
                </motion.h2>

                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-2 text-sm md:text-base text-gray-200 max-w-md"
                    >
                        Click to view all {category.items.length} photos
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

const MasonryGrid = ({ items }) => {
    return (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4 pb-20">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="break-inside-avoid rounded-xl overflow-hidden shadow-lg group relative bg-gray-100"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-bold text-lg">{item.title}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// --- Main Page ---

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Generate large datasets for "50+ photos" simulation using duplicated assets
    const baseImages = [
        dinnerImg, memberDriveImg, workshopImg, agraImg,
        img1, img2, img3, img4, img5, img6, img7,
        img8, img9, img10, img12, img14, img15
    ];

    const generateItems = (baseTitle, count) => {
        return Array.from({ length: count }, (_, i) => ({
            image: baseImages[i % baseImages.length],
            title: `${baseTitle} ${i + 1}`
        }));
    };

    const categories = useMemo(() => [
        {
            id: 1,
            name: "Events & Culture",
            image: dinnerImg,
            items: generateItems("Culture", 25)
        },
        {
            id: 2,
            name: "Member Drive",
            image: memberDriveImg,
            items: generateItems("Drive", 20)
        },
        {
            id: 3,
            name: "Workshops",
            image: workshopImg,
            items: generateItems("Workshop", 22)
        },
        {
            id: 4,
            name: "Trips & Fun",
            image: agraImg,
            items: generateItems("Trip", 30)
        }
    ], []);

    return (
        <div className="min-h-screen bg-white text-[#0B3D59] font-sans selection:bg-[#0B3D59] selection:text-white overflow-x-hidden">
            {/* Header */}
            <motion.div
                className="pt-20 pb-8 text-center px-4 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0B3D59] to-[#0E517A]">
                    {selectedCategory ? selectedCategory.name : "Our Gallery"}
                </h1>
                <p className="text-gray-500 font-medium text-lg">
                    {selectedCategory ? "Explore the moments" : "Select a category to explore"}
                </p>
            </motion.div>

            {/* Content Area */}
            <div className="max-w-[1600px] mx-auto px-4 min-h-[60vh] relative pb-24">
                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        <motion.div
                            key="menu"
                            className="flex flex-col md:flex-row gap-4 h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {categories.map((cat) => (
                                <CategoryStrip
                                    key={cat.id}
                                    category={cat}
                                    onSelect={setSelectedCategory}
                                    isActive={false} // In this view, none are "active" in the detail sense, but we could add a hover state locally if we moved state down
                                    isAnyActive={false}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative"
                        >
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="mb-6 flex items-center gap-2 px-6 py-3 bg-[#0B3D59] text-white rounded-full font-bold shadow-lg hover:bg-[#094b70] transition-colors fixed bottom-8 right-8 z-50 md:static md:bottom-auto md:right-auto"
                            >
                                <ArrowBackIcon fontSize="small" /> Back to Categories
                            </button>

                            <MasonryGrid items={selectedCategory.items} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Stylistic Background elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
