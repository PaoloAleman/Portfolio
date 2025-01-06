import { motion } from "framer-motion";
import IconAnimation from "./IconAnimation";

const links = [
    {
        href: "https://github.com/PaoloAleman",
        src: "/contact/github.svg",
        alt: "GitHub",
        tip: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/paolo-aleman-35aa0624a/",
        src: "/contact/linkedin.svg",
        alt: "LinkedIn",
        tip: "LinkedIn",
    },
    {
        href: "mailto:paoloaleman86@gmail.com",
        src: "/contact/gmail.svg",
        alt: "Gmail",
        tip: "Gmail",
    },
    {
        href: "/contact/paoloAlemanCV.pdf",
        src: "/contact/cv.svg",
        alt: "CV",
        tip: "CV",
    },
    {
        href: "https://www.instagram.com/paolo_2309/",
        src: "/contact/instagram.svg",
        alt: "Instagram",
        tip: "Instagram",
    },
]

export const Hero = () => {
    return (
        <>
            <div className="flex items-center w-full lg:justify-around lg:flex-row flex-col min-h-[100vh]">
                <motion.div
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div>
                        <motion.h1
                            className="text-6xl font-bold"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Paolo Aleman
                        </motion.h1>
                        <motion.h2
                            className="text-5xl font-bold"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Desarrollador Web
                        </motion.h2>
                    </div>
                    <motion.div
                        className="flex flex-row gap-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {links.map((icon, index) => (
                            <motion.div
                                data-tip={icon.tip}
                                className="tooltip"
                                key={index}
                                whileHover={{ scale: 1.5, rotate: 0 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                                    <img src={icon.src} alt={icon.alt} className="w-8" />
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
