import {WorkCard} from "./WorkCard";
import { motion } from "framer-motion";
import worksData from '../../assets/works.json';
import {Project} from "../../assets/types";

const works: Project[] = worksData as Project[];

export const Works = () => {
    return (
        <div className={'md:min-h-[85vh] min-h-[160vh] flex justify-center items-center'}>
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <motion.h2
                    className={'md:text-5xl text-4xl font-bold text-center mb-28'}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    Trabajos
                </motion.h2>
                <div className={`flex items-center ${works.length < 2 ? 'lg:justify-center' : ' lg:justify-between' } flex-wrap md:gap-0 gap-8 md:w-[95%] w-[90%] mx-auto`}>
                    {works.map((data, index) => (
                        <motion.div
                            className={'lg:w-[49%]'}
                            key={index}
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.4, duration: 1}}
                        >
                            <WorkCard work={data}/>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};