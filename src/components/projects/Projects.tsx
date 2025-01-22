import {ProjectCard} from "./ProjectCard";
import { motion } from "framer-motion";
import projectsData  from '../../assets/projects.json'
import {Project} from "../../assets/types";

const dataProjects : Project[] = projectsData as Project[];

export const Projects = () => {
    return (
        <div className={'lg:min-h-[140vh] md:min-h-[200vh] min-h-[280vh] flex pt-20'}>
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
                <div className={'flex items-center lg:justify-between flex-wrap lg:gap-0 gap-8 lg:w-[95%] w-[90%] mx-auto'}>
                    {dataProjects.map((data, index) => (
                        <motion.div
                            className={'lg:w-[32%]'}
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
