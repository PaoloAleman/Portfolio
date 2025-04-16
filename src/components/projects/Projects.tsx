import {ProjectCard} from "./ProjectCard";
import { motion } from "framer-motion";
import projectsData  from '../../assets/projects.json'
import {Project} from "../../assets/types";

const dataProjects : Project[] = projectsData as Project[];

export const Projects = () => {
    return (
        <div className={'lg:min-h-[140vh] flex pb-20'}>
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <motion.h2
                    className={'md:text-5xl text-4xl font-bold text-center mb-20'}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    Proyectos
                </motion.h2>
                <div className={'grid md:grid-cols-3 grid-cols-1  md:gap-y-8 md:gap-x-0 gap-8 lg:w-[95%] w-[90%] mx-auto'}>
                    {dataProjects.map((data, index) => (
                        <motion.div
                            className={'lg:w-[95%] mx-auto'}
                            key={index}
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.8, duration: 1}}
                        >
                            <ProjectCard project={data}/>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
