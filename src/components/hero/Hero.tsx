import { motion } from "framer-motion";
import IconAnimation from "./IconAnimation";
import dataLinks from "../../assets/links.json"

const links = dataLinks;

export const Hero = () => {
    return (
        <>
            <div className="flex items-center w-full lg:justify-around lg:flex-row justify-center min-h-[100vh]">
                <motion.div
                    className="flex flex-col md:gap-6 gap-10"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div>
                        <motion.h1
                            className="lg:text-7xl md:text-6xl text-4xl font-bold lg:text-left text-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Paolo Aleman
                        </motion.h1>
                        <motion.h2
                            className="lg:text-6xl md:text-5xl text-3xl font-bold lg:text-left text-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Desarrollador Web
                        </motion.h2>
                    </div>
                    <motion.div
                        className="grid grid-cols-6 gap-y-6 md:gap-10 "
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        {links.map((icon, index) => (
                            <motion.div
                                data-tip={icon.tip}
                                className="tooltip mx-auto"
                                key={index}
                                whileHover={{ scale: 1.5, rotate: 0 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                                    <img src={icon.src} alt={icon.alt} className="md:w-8 w-6" />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <IconAnimation />
            </div>
        </>
    );
};
