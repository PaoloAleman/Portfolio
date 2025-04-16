import { WorkCard } from "./WorkCard";
import { motion } from "framer-motion";
import worksData from '../../assets/works.json';
import { Project } from "../../assets/types";

const works: Project[] = worksData as Project[];

export const Works = () => {
    return (
        <section className="w-full flex flex-col items-center py-20 lg:min-h-[100vh]">
            <motion.h2
                className="md:text-5xl text-4xl font-bold text-center mb-20"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Trabajos
            </motion.h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 w-[95%]">
                {works.map((data, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className=""
                    >
                        <WorkCard work={data} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
