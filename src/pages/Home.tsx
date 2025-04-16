import { Projects } from "../components/projects/Projects";
import { Works } from "../components/work/Works";
import { Hero } from "../components/hero/Hero";

export const Home = () => {
    return (
        <>
            <Hero />
            <Works />
            <Projects />
        </>
    );
};
