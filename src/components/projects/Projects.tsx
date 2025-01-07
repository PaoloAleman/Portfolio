import {ProjectCard} from "./ProjectCard";
import { motion } from "framer-motion";
import projectsData  from '../../assets/projects.json'
import {Project} from "../../assets/types";

const dataProjects : Project[] = projectsData as Project[];

export const Projects = () => {
    return (
        <>
            <div className={'min-h-[100vh] flex justify-center items-center'}>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <motion.h2
                        className={'text-4xl font-bold text-center my-16'}
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        Projects
                    </motion.h2>
                    <div className={'flex items-center lg:justify-between flex-wrap md:gap-0 gap-8 w-[95%] mx-auto'}>
                        {dataProjects.map((data, index) => (
                            <motion.div
                                className={'lg:w-[30%]'}
                                key={index}
                                initial={{opacity: 0, y: 100}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.4, duration: 1}}
                            >
                                <ProjectCard project={data}/>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
);
};
