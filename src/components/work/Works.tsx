import {WorkCard} from "./WorkCard";
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
    datos : Item[];
}

const works : Work[] = [
    {
        title: 'K&O Mujer',
        images: [
            {
                source: '/works/komujer.jpg',
                alt: 'K&O Mujer',
                dataTip: 'K&O Mujer'
            }
        ],
        description: 'Un sistema de gestión de stock integral que registra todos los eventos dentro de la empresa. El\n' +
            '                        ingreso de materiales y telas, la producción de cortes y costuras, y la venta del producto final\n' +
            '                        son monitoreados por el sistema. La venta se da por varias vías, desde Mercado Libre hasta\n' +
            '                        cotizaciones directas, lo que permite una gestión eficiente y actualizada de inventarios y\n' +
            '                        transacciones.',
        backendTechnologies: [
            {
                source : '/technologies/java.svg',
                alt: 'Java',
                dataTip: 'Java'
            },
            {
                source : '/technologies/spring.svg',
                alt: 'Spring Boot',
                dataTip: 'Spring Boot'
            }
        ],
        database: {
            source: '/technologies/mysql.svg',
            alt: 'MySQL',
            dataTip: 'MySQL'
        },
        frontendTechnologies: [
            {
                source : '/technologies/thymeleaf.svg',
                alt: 'Thymeleaf',
                dataTip: 'Thymeleaf'
            },
            {
                source : '/technologies/javascript.svg',
                alt: 'JavaScript',
                dataTip: 'JavaScript'
            }
        ],
        repository: '',
        deploy: '',
        funciones: [
            {
                title: 'Armado de la base de datos.',
                description:''
            },
            {
                title: 'Desarrollo del frontend y del backend.',
                description:''
            },
            {
                title: 'Realizar el deploy del sistema y su base de datos.',
                description:''
            },
        ],
        funcionalidades: [
            {
                title:'CRUDs de las entidades.',
                description:''
            },
            {
                title:'Cotización de ventas mayoristas.',
                description:''
            },
            {
                title:'Generador de precios.',
                description:''
            },
        ],
        datos: [
            {
                title: 'Rol',
                description: 'Desarrollador FullStack.'
            },
            {
                title: 'Tiempo',
                description: 'Tres meses.'
            }
        ]
    },
]

export const Works = () => {
    return (
        <>
            <h2 className={'text-4xl font-bold text-center my-5'}>Works</h2>
            <div className={'flex items-center lg:justify-around flex-wrap md:gap-0 gap-8 w-[95%] mx-auto'}>
                {works.map((data, index) => (
                    <WorkCard work={data} key={index}/>
                ))}
            </div>
        </>
    )
}