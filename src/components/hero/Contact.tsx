import { motion } from "framer-motion";
import dataLinks from "../../assets/links.json";

const links = dataLinks;

export const Contact = () => {
    return (
        <motion.div
            className="grid md:grid-cols-6 grid-cols-3 gap-y-6 md:gap-10 "
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.9}}
        >
            {links.map((icon, index) => (
                <motion.div
                    data-tip={icon.tip}
                    className="tooltip mx-auto"
                    key={index}
                    whileHover={{scale: 1.5, rotate: 0}}
                    whileTap={{scale: 0.9}}
                >
                    <a href={icon.href} target="_blank" rel="noopener noreferrer">
                        <img src={icon.src} alt={icon.alt} className="w-8"/>
                    </a>
                </motion.div>
            ))}
        </motion.div>
    )
}