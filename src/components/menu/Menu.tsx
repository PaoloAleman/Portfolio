import { useState } from "react";

const sections = [
    {
        name: "Inicio",
        src: "/menu/home.svg",
    },
    {
        name: "Trabajos",
        src: "/menu/work.svg",
    },
    {
        name: "Proyectos",
        src: "/menu/projects.svg",
    },
];

export const Menu = ({ onSectionChange }) => {
    const [selected, setSelected] = useState("inicio");

    const handleSectionChange = (sectionName) => {
        setSelected(sectionName);
        onSectionChange(sectionName);
    };

    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 ">
            <ul className="menu menu-horizontal bg-[#310000] grid grid-cols-3 rounded-box animate-slide-up boxShadow">
                {sections.map((item, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleSectionChange(item.name.toLowerCase())}
                            className={`tooltip md:p-5 md:px-10 ${
                                selected === item.name.toLowerCase() ? "gradient-active" : "gradient"
                            }`}
                            data-tip={item.name}
                        >
                            <img src={item.src} alt={item.name} className={"w-10"} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
