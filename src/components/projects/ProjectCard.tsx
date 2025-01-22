import {Modal} from "./Modal";
import {ImageCarousel} from "./ImageCarousel";
import {ToolTip} from "./ToolTip";
import {Project} from "../../assets/types";

export const ProjectCard = (props : {project : Project})=>{
    const {project} = props;
    return (
        <div className="card card-compact bg-[#310000] boxShadow">
            <ImageCarousel images={project.images} />
            <div className="md:card-body p-4">
                <div className={'flex items-center justify-between'}>
                    <h2 className="card-title">{project.title}</h2>
                    <div className={'hidden lg:flex items-center md:gap-6 gap-4 mr-2'}>
                        <a href={project.repository.url} target={'_blank'}><ToolTip image={project.repository.source}
                                                              altImage={project.repository.alt}
                                                              dataTip={project.repository.alt}/></a>
                        <a href={project.deploy.url} target={'_blank'}><ToolTip image={project.deploy.source}
                                                          altImage={project.deploy.alt} dataTip={project.deploy.alt}/></a>
                    </div>
                    <div className={'lg:hidden flex items-center md:gap-6 gap-4'}>
                        <a href={project.repository.url} target={'_blank'}>
                            <img src={project.repository.source} alt={project.repository.alt} className={'w-8 h-8 cursor-pointer bg-[#310000]'}/>
                        </a>
                        <a href={project.deploy.url} target={'_blank'}>
                            <img src={project.deploy.source} alt={project.deploy.alt} className={'w-8 h-8 cursor-pointer bg-[#310000]'}/>
                        </a>
                    </div>
                </div>
                <p className={'md:my-2 my-4'}>{project.description}</p>
                <div className="flex items-center md:justify-between md:flex-row flex-col justify-center md:gap-y-0 gap-y-6">
                    <div className="flex items-center gap-4">
                        {project.technologies.map((technology, index) => (
                            <ToolTip image={technology.source} altImage={technology.alt}
                                     dataTip={technology.alt} key={index}/>
                        ))}
                    </div>
                    <div className="card-actions justify-center">
                        <Modal project={project}/>
                    </div>
                </div>
            </div>
        </div>
    )
}