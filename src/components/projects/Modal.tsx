import { useState, useEffect } from "react";
import { Project } from "../../assets/types";

export const Modal = (
    props: {
        project: Project;
    }
) => {
    const { project } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            closeWithAnimation();
        }
    };

    const colClasses = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
    };

    const closeWithAnimation = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 200);
    };

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            window.addEventListener("keydown", handleKeyDown);
            document.body.classList.add("overflow-hidden");
        } else {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <>
            <button className="btn text-white bg-[#7d0000] border border-none hover:bg-[#c10000]" onClick={() => setIsOpen(true)}>
                See more
            </button>
            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[80] transition-opacity duration-200 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() => closeWithAnimation()}
                >
                    <div
                        className={`modal-box w-11/12 max-w-5xl transform transition-all bg-[#310000] duration-300 ease-out ${
                            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        } relative overflow-visible`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {project.icon && (
                            <button className="absolute md:-right-16 md:-top-16 -right-4 -top-6">
                                <img
                                    src={project.icon.source}
                                    alt={project.icon.alt}
                                    className="md:h-32 md:w-32 h-24 w-24"
                                />
                            </button>
                        )}
                        <h2 className="text-3xl font-bold">{project.title}</h2>
                        <p className={"my-4"}>{project.description}</p>
                        <div
                            className={`grid ${
                                colClasses[project.sections.length] || "grid-cols-1"
                            }`}
                        >
                            {project.sections.map((section, index) => (
                                <div key={index} className={"mx-auto"}>
                                    <h3 className="text-xl font-semibold">
                                        {section.title}
                                    </h3>
                                    <ul className="list-disc ml-5">
                                        {section.items.map((item, index) => (
                                            <li key={index}>
                                                <strong>{item.title}</strong>{" "}
                                                {item.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="modal-action md:hidden block">
                            <button
                                className="btn"
                                onClick={() => closeWithAnimation()}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
