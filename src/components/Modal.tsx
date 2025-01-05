import { useState, useEffect } from "react";
import { ToolTip } from "./ToolTip";
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

export const Modal = (
    props: {
        project : Project}
) => {

    const {project} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            closeWithAnimation();
        }
    };

    const closeWithAnimation = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 200);
    };

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <button className="btn" onClick={() => setIsOpen(true)}>
                See more
            </button>
            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[80] transition-opacity duration-200 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div
                        className={`modal-box w-11/12 max-w-5xl transform transition-all duration-300 ease-out ${
                            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    >
                        <h2 className="text-3xl font-bold">{project.title}</h2>
                        <p className={'my-4'}>{project.description}</p>
                        {project.items.length > 0 &&
                            <div>
                                <h3 className="text-xl font-semibold">{project.itemsTitle}</h3>
                                <ul className="list-disc ml-5">
                                    {project.items.map((item, index) => (
                                        <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                                    ))}
                                </ul>
                            </div>
                        }

                        {project.apis.length > 0 &&
                            <div>
                                <h3 className="text-xl font-semibold mt-4">APIs</h3>
                                <ul className="list-disc ml-5 mb-5">
                                    {project.apis.map((api, index) => (
                                        <li key={index}><strong>{api.title}:</strong> {api.description}</li>
                                    ))}
                                </ul>
                            </div>
                        }
                        <div className="flex items-center justify-around">
                            {project.backendTechnologies.length > 0 &&
                                <div className="flex items-center flex-col gap-6">
                                    <h4 className="text-center font-semibold text-lg">Backend</h4>
                                    <div className="flex items-center gap-12">
                                        {project.backendTechnologies.map((backendTechnology, index) => (
                                            <ToolTip image={backendTechnology.source} altImage={backendTechnology.alt}
                                                     dataTip={backendTechnology.dataTip} key={index}/>
                                        ))}
                                    </div>
                                </div>
                            }
                            {project.database &&
                                <div className="flex items-center flex-col gap-6">
                                    <h4 className="text-center font-semibold text-lg">Database</h4>
                                    <div className="flex items-center gap-12">
                                        <ToolTip image={project.database.source} altImage={project.database.alt}
                                                 dataTip={project.database.dataTip}/>
                                    </div>
                                </div>
                            }
                            <div className="flex items-center flex-col gap-6">
                                <h4 className="font-semibold text-lg">Frontend</h4>
                                <div className="flex items-center gap-12">
                                    {project.frontendTechnologies.map((frontendTechnology, index) => (
                                        <ToolTip image={frontendTechnology.source} altImage={frontendTechnology.alt}
                                                 dataTip={frontendTechnology.dataTip} key={index}/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center flex-col gap-6">
                                <h4 className="font-semibold text-lg">Repository</h4>
                                <div className="flex items-center gap-12">
                                    <a href={project.repository}><ToolTip image={"/technologies/github.svg"}
                                                                          altImage={"Repository"}
                                                                          dataTip={"Repository"}/></a>
                                </div>
                            </div>
                            <div className="flex items-center flex-col gap-6">
                                <h4 className="font-semibold text-lg">Deploy</h4>
                                <div className="flex items-center gap-12">
                                    <a href={project.deploy}><ToolTip image={"/technologies/railway.svg"}
                                                                      altImage={"Railway"} dataTip={"Railway"}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
