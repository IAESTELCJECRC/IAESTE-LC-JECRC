// src/pages/Gallery.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InfiniteMenu from "../components/InfiniteMenu";
import CircularGallery from "../components/CircularScreen";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            name: "IAESTE Dinner",
            image: "src\assets\images\Dinner.jpg",
            items: [
                { image: "https://picsum.photos/400/300?1", title: "Dinner 1" },
                { image: "https://picsum.photos/400/300?2", title: "Dinner 2" },
                { image: "https://picsum.photos/400/300?3", title: "Dinner 3" },
                { image: "https://picsum.photos/400/300?4", title: "Dinner 4" }
            ]
        },
        {
            name: "Member Drive",
            image: "src/assets/images/imgv1.jpeg",
            items: [
                { image: "src/assets/images/imgv1.jpeg", title: "Drive 1" },
                { image: "https://picsum.photos/400/300?12", title: "Drive 2" },
                { image: "https://picsum.photos/400/300?13", title: "Drive 3" }
            ]
        },
        {
            name: "Workshop",
            image: "src\assets\images\home.jpg",
            items: [
                { image: "https://picsum.photos/400/300?21", title: "Workshop 1" },
                { image: "https://picsum.photos/400/300?22", title: "Workshop 2" }
            ]
        }
        // add more categories similarly...
    ];

    return (
        <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden", background: "#ffffff" }}>
            <AnimatePresence mode="wait">
                {!selectedCategory && (
                    <motion.div
                        key="circular"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: "absolute", inset: 0 }}
                    >
                        {/* CircularGallery will call onSelectCategory(category) when user clicks a centered card */}
                        <CircularGallery items={categories} onSelectCategory={(cat) => setSelectedCategory(cat)} />
                    </motion.div>
                )}

                {selectedCategory && (
                    <motion.div
                        key="infinite"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        style={{ position: "absolute", inset: 0 }}
                    >
                        {/* InfiniteMenu shows the selectedCategory.items */}
                        <InfiniteMenu
                            items={selectedCategory.items}
                            onBack={() => setSelectedCategory(null)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
