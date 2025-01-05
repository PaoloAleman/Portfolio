import {Modal} from "./Modal";

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
    image : string;
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
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={project.image}
                    alt="Project Image"/>
            </figure>
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