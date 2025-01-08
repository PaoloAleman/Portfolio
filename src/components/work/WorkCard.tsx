import {ToolTip} from "../projects/ToolTip";
import {Modal} from "../projects/Modal";
import {Project} from "../../assets/types";

export const WorkCard = (props : { work : Project}) => {
    const { work } = props;

    return (
        <>
            <div className="card md:card-side bg-[#310000] boxShadow">
                {work.images.map((data, index) => (
                    <img src={data.source} key={index} alt={data.alt} className={'md:w-3/12 md:h-3/12 md:rounded-l-xl md:rounded-t-none rounded-t-xl'} />
                ))}
                <div className="md:card-body p-4">
                    <div className={'flex items-center justify-between'}>
                        <h2 className="card-title">{work.title}</h2>
                        <div className={'flex items-center gap-6'}>
                            {work.repository.url != "" ?
                                <a href={work.repository.url} target={'_blank'}><ToolTip
                                    image={work.repository.source}
                                    altImage={work.repository.alt}
                                    dataTip={work.repository.alt}/></a>
                            :
                                <ToolTip
                                    image={work.repository.source}
                                    altImage={work.repository.alt}
                                    dataTip={work.repository.alt}/>
                            }
                            {work.deploy.url != "" ?
                                <a href={work.deploy.url} target={'_blank'}><ToolTip
                                    image={work.deploy.source}
                                    altImage={work.deploy.alt}
                                    dataTip={work.deploy.alt}/></a>
                                :
                                <ToolTip
                                    image={work.deploy.source}
                                    altImage={work.deploy.alt}
                                    dataTip={work.deploy.alt}/>
                            }
                        </div>
                    </div>
                    <p className={'my-4'}>{work.description}</p>

                    <div className="flex items-center md:justify-between md:flex-row flex-col justify-center md:gap-y-0 gap-y-6">
                        <div className="flex items-center md:gap-4 gap-6">
                            {work.technologies.map((technology, index) => (
                                <ToolTip image={technology.source} altImage={technology.alt}
                                         dataTip={technology.alt} key={index}/>
                            ))}
                        </div>
                        <div className="card-actions justify-center">
                            <Modal project={work}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}