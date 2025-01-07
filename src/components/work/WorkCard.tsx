import {ToolTip} from "../projects/ToolTip";
import {Modal} from "../projects/Modal";
import {Project} from "../../assets/types";

export const WorkCard = (props : { work : Project}) => {
    const { work } = props;

    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                {work.images.map((data, index) => (
                    <img src={data.source} key={index} alt={data.alt} className={'w-3/12 h-3/12 rounded-l-xl'} />
                ))}
                <div className="card-body">
                    <div className={'flex items-center justify-between'}>
                        <h2 className="card-title">{work.title}</h2>
                        <div className={'flex items-center gap-6'}>
                            <a href={work.repository.url} target={'_blank'}><ToolTip
                                image={"/technologies/github.svg"}
                                altImage={"GitHub"}
                                dataTip={"Repository"}/></a>
                            <a href={work.deploy.url}><ToolTip image={work.deploy.source}
                                                                  altImage={work.deploy.alt}
                                                                  dataTip={work.deploy.alt}/></a>
                        </div>
                    </div>
                    <p className={'my-4'}>{work.description}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center md:gap-4 gap-2">
                            {work.technologies.map((technology, index) => (
                                <ToolTip image={technology.source} altImage={technology.alt}
                                         dataTip={technology.alt} key={index}/>
                            ))}
                        </div>
                        <div className="card-actions justify-end">
                            <Modal project={work}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}