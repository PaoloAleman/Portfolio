import { motion } from "framer-motion";
import IconAnimation from "./IconAnimation";
import { Contact } from "./Contact";

export const Hero = () => {

    return (
        <div className="flex items-center w-full min-h-screen flex-col lg:flex-row lg:justify-around justify-center">
            <motion.div
                className="flex flex-col md:gap-6 gap-10"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="text-center lg:text-left">
                    <motion.h1
                        className="lg:text-6xl md:text-5xl text-4xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Paolo Aleman
                    </motion.h1>
                    <motion.h2
                        className="lg:text-5xl md:text-4xl text-3xl font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Desarrollador Web
                    </motion.h2>
                </div>

                <Contact />
            </motion.div>

            <IconAnimation />
        </div>
    );
};
