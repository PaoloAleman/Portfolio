import {Modal} from "./Modal";
import {ImageCarousel} from "./ImageCarousel";

type Technology = {
    source : string;
    alt : string;
    dataTip : string;
}

type Item = {
    title : string;
    description : string;
}

type Project = {
    title : string;
    images : Technology[];
    description : string;
    backendTechnologies : Technology[];
    database : Technology;
    frontendTechnologies : Technology[];
    repository: string;
    deploy: string;
    items: Item[];
    itemsTitle: string;
    apis: Item[];
}

export const ProjectCard = (props : {project : Project})=>{
    const {project} = props;
    return (
        <div className="card card-compact bg-base-100 lg:w-3/12 shadow-xl">
                <ImageCarousel images={project.images} />
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <Modal project={project} />
                </div>
            </div>
        </div>
    )
}