import React from "react";
import { motion } from "framer-motion";
import dataIcons from '../../assets/icons.json';

const icons = dataIcons;

const IconAnimation = () => {
    const totalIcons = icons.length;
    const radius = 280;

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
        <motion.div variants={containerVariants} initial={'hidden'} whileInView={'visible'} className="relative w-[400px] h-[400px] lg:flex items-center justify-center hidden rounded-full">
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
                                className="w-16 h-16 hover:filter hover:drop-shadow-[0px_0px_9px_black]"
                            />
                        </motion.div>
                    </div>
                );
            })}
        </motion.div>
    );
};

export default IconAnimation;
