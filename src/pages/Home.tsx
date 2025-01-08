import { Projects } from "../components/projects/Projects";
import { Works } from "../components/work/Works";
import { Hero } from "../components/hero/Hero";
import { Menu } from "../components/menu/Menu";
import { motion } from "framer-motion";
import { useState } from "react";

export const Home = () => {
    const [activeSection, setActiveSection] = useState("inicio");

    const renderSection = () => {
        switch (activeSection) {
            case "inicio":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Hero />
                    </motion.div>
                );
            case "trabajos":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Works />
                    </motion.div>
                );
            case "proyectos":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Projects />
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Menu onSectionChange={(section) => setActiveSection(section)} />
            <div className="relative">{renderSection()}</div>
        </>
    );
};
