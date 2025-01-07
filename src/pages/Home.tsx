import { Projects } from "../components/projects/Projects";
import { Works } from "../components/work/Works";
import { Hero } from "../components/hero/Hero";
import { Menu } from "../components/menu/Menu";
import { motion } from "framer-motion";

export const Home = () => {
    return (
        <>
            <motion.section
                id="hero"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
                <Hero/>
            </motion.section>

            <motion.section
                id="works"
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
                className="mt-16"
            >
                <Works/>
            </motion.section>

            <motion.section
                id="projects"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
                className="mt-16"
            >
                <Projects/>
            </motion.section>

            <Menu/>
        </>
    );
};
