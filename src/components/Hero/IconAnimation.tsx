import React from "react";
import { motion } from "framer-motion";

const icons = [
    { id: 1, name: "Java", icon: "./technologies/java.svg" },
    { id: 2, name: "Spring Boot", icon: "/technologies/spring.svg" },
    { id: 4, name: "MySQL", icon: "/technologies/mysql.svg" },
    { id: 5, name: "React", icon: "/technologies/react.svg" },
    { id: 6, name: "Tailwind", icon: "/technologies/tailwind.svg" },
    { id: 8, name: "JavaScript", icon: "/technologies/javascript.svg" },
    { id: 7, name: "Thymeleaf", icon: "/technologies/thymeleaf.svg" },
    { id: 3, name: "Node.js", icon: "/technologies/nodejs.svg" },
];

const IconAnimation = () => {
    const totalIcons = icons.length;
    const radius = 250;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const iconVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
            },
        },
    };

    const getPosition = (index) => {
        const angle = (360 / totalIcons) * index;
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;
        return { x, y };
    };

    return (
        <motion.div variants={containerVariants} initial={'hidden'} animate={'visible'} className="relative w-[400px] h-[400px] flex items-center justify-center bg-[#1d232a] rounded-full">
            {icons.map((icon, index) => {
                const { x, y } = getPosition(index);
                return (
                    <div
                        key={icon.id}
                        className="absolute"
                        style={{
                            transform: `translate(${-y}px, ${-x}px)`,
                        }}
                    >
                        <motion.div
                            className="flex items-center justify-center w-16 h-16 tooltip"
                            variants={iconVariants}
                            whileHover={{
                                scale: 1.2,
                                y: -10,
                                transition: { type: "spring", stiffness: 150 },
                            }}
                            data-tip={icon.name}
                        >
                            <img
                                src={icon.icon}
                                alt={icon.name}
                                className="w-16 h-16 hover:filter hover:drop-shadow-[0px_0px_9px_white]"
                            />
                        </motion.div>
                    </div>
                );
            })}
        </motion.div>
    );
};

export default IconAnimation;
