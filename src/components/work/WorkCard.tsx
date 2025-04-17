import { ToolTip } from "../projects/ToolTip";
import { Modal } from "../projects/Modal";
import { Project } from "../../assets/types";

export const WorkCard = ({ work }: { work: Project }) => {
    const renderIconLink = (
        url: string,
        src: string,
        alt: string,
        isCompact: boolean
    ) => {
        const className = isCompact
            ? "w-8 h-8 cursor-pointer bg-[#310000]"
            : undefined;

        const icon = <img src={src} alt={alt} className={className} />;

        return url != "" ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {isCompact ? icon : <ToolTip image={src} altImage={alt} dataTip={alt} />}
            </a>
        ) : isCompact ? (
            icon
        ) : (
            <ToolTip image={src} altImage={alt} dataTip={alt} />
        );
    };

    return (
        <div className="card md:card-side bg-[#310000] boxShadow w-full">
            {work.images.map((data, index) => (
                <img
                    key={index}
                    src={data.source}
                    alt={data.alt}
                    className="md:w-3/12 md:h-3/12 md:rounded-l-xl md:rounded-tr-none rounded-t-xl"
                />
            ))}

            <div className="md:card-body p-4">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{work.title}</h2>

                    <div className="hidden md:flex gap-6">
                        {renderIconLink(work.repository.url, work.repository.source, work.repository.alt, false)}
                        {work.deploy.url && renderIconLink(work.deploy.url, work.deploy.source, work.deploy.alt, false)}
                    </div>

                    <div className="md:hidden flex gap-6">
                        {renderIconLink(work.repository.url, work.repository.source, work.repository.alt, true)}
                        {work.deploy.url && renderIconLink(work.deploy.url, work.deploy.source, work.deploy.alt, true)}
                    </div>

                </div>

                <p className="my-4">{work.description}</p>

                <div className="flex md:flex-row flex-col md:justify-between justify-center gap-y-6">
                    <div className="flex items-center flex-wrap md:gap-4 gap-6">
                        {work.technologies.map((tech, index) => (
                            <ToolTip
                                key={index}
                                image={tech.source}
                                altImage={tech.alt}
                                dataTip={tech.alt}
                            />
                        ))}
                    </div>

                    <div className="card-actions justify-center">
                        <Modal project={work} />
                    </div>
                </div>
            </div>
        </div>
    );
};
