import {ToolTip} from "../projects/ToolTip";

type Technology = {
    source : string;
    alt : string;
    dataTip : string;
}
type Item = {
    title : string;
    description : string;
}
type Work = {
    title : string;
    images : Technology[];
    description : string;
    backendTechnologies : Technology[];
    database : Technology;
    frontendTechnologies : Technology[];
    repository: string;
    deploy: string;
    funcionalidades: Item[];
    funciones: Item[];
    datos: Item[];
}

export const WorkCard = (props : { work : Work}) => {
    const { work } = props;

    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                {work.images.map((data, index) => (
                    <img src={data.source} key={index} alt={data.alt} className={'w-3/12 h-3/12 rounded-l-xl'} />
                ))}
                <div className="card-body">
                    <h2 className="card-title">{work.title}</h2>
                    <p className={'my-4'}>{work.description}</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">Datos:</h3>
                            <ul className="list-disc ml-5">
                                {work.datos.map((data, index) => (
                                    <li key={index}><strong>{data.title}: </strong>{data.description}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Mis funciones:</h3>
                            <ul className="list-disc ml-5">
                                {work.funciones.map((funcion, index) => (
                                    <li key={index}><strong>{funcion.title}</strong></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Funcionalidades:</h3>
                            <ul className="list-disc ml-5">
                                {work.funcionalidades.map((funcionalidad, index) => (
                                    <li key={index}><strong>{funcionalidad.title}</strong></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-around flex-wrap md:gap-0 gap-6 mt-6">
                        {work.backendTechnologies.length > 0 &&
                            <div className="flex items-center flex-col md:gap-6 gap-2">
                                <h4 className="text-center font-bold text-lg">Backend</h4>
                                <div className="flex items-center md:gap-12 gap-2">
                                    {work.backendTechnologies.map((backendTechnology, index) => (
                                        <ToolTip image={backendTechnology.source} altImage={backendTechnology.alt}
                                                 dataTip={backendTechnology.dataTip} key={index}/>
                                    ))}
                                </div>
                            </div>
                        }
                        {work.database &&
                            <div className="flex items-center flex-col md:gap-6 gap-2">
                                <h4 className="text-center font-bold text-lg">Database</h4>
                                <div className="flex items-center md:gap-12 gap-2">
                                    <ToolTip image={work.database.source} altImage={work.database.alt}
                                             dataTip={work.database.dataTip}/>
                                </div>
                            </div>
                        }
                        <div className="flex items-center flex-col md:gap-6 gap-2">
                            <h4 className="text-center font-bold text-lg">Frontend</h4>
                            <div className="flex items-center md:gap-12 gap-2">
                                {work.frontendTechnologies.map((frontendTechnology, index) => (
                                    <ToolTip image={frontendTechnology.source} altImage={frontendTechnology.alt}
                                             dataTip={frontendTechnology.dataTip} key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center flex-col md:gap-6 gap-2">
                            <h4 className="text-center font-bold text-lg">Repository</h4>
                            <div className="flex items-center md:gap-12 gap-2">
                                <a href={work.repository}><ToolTip image={"/technologies/github.svg"}
                                                                      altImage={"GitHub"}
                                                                      dataTip={"GitHub"}/></a>
                            </div>
                        </div>
                        <div className="flex items-center flex-col md:gap-6 gap-2">
                            <h4 className="text-center font-bold text-lg">Deploy</h4>
                            <div className="flex items-center md:gap-12 gap-2">
                                <a href={work.deploy}><ToolTip image={"/technologies/railway.svg"}
                                                                  altImage={"Railway"} dataTip={"Railway"}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}