import {ProjectCard} from "./ProjectCard";

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
    images : Technology[];
    description : string;
    backendTechnologies : Technology[];
    database : Technology;
    frontendTechnologies : Technology[];
    repository: string;
    deploy: string;
    items: Item[];
    itemsTitle: string;
    apis: Item[];
    icon: Technology;
}

const dataProjects : Project[] = [
    {
        title: 'Kirby Pregunta',
        images: [
            {
                source: '/projects/kirbyPregunta.png',
                alt: 'Home',
                dataTip: 'Home'
            },
        ],
        description: 'KirbyPregunta es un juego de preguntas y respuestas estilo ABCD para poner a prueba tus conocimientos en temas como Deportes, Arte e Historia, ¿Te atreves a probarlo?',
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
                source : '/technologies/react.svg',
                alt: 'React',
                dataTip: 'React'
            },
            {
                source : '/technologies/tailwind.svg',
                alt: 'Tailwind CSS',
                dataTip: 'Tailwind CSS'
            }
        ],
        repository: '',
        deploy: '',
        items:[
            {
                title: 'Un jugador',
                description: 'Responde tantas preguntas como puedas antes de equivocarte. Por cada respuesta correcta, ganarás puntos y subirás en el ranking mundial. ¡Las preguntas se adaptan a tu habilidad, así que cuanto mejor lo hagas, más difíciles serán!'
            },
            {
                title: 'Duelo',
                description: 'Desafía a otros jugadores a un duelo cara a cara. Gana si consigues responder más preguntas correctamente. ¡Pon a prueba tu velocidad y tus conocimientos!'
            },
        ],
        itemsTitle: 'Modos de juego',
        apis: [
            {
                title: 'Gmail',
                description: 'Para el registro de usuarios.',
            }
        ],
        icon: {
            source: '/projects/kirby.png',
            alt: 'Kirby',
            dataTip:'Kirby'
        }
    },
    {
        title: 'River de Gallardo',
        images: [
            {
                source: '/projects/riverDeGallardo.png',
                alt: 'Home',
                dataTip: 'Home'
            },
        ],
        description: 'Un repaso del ciclo de Marcelo Gallardo en River Plate, destacando su importancia y los títulos logrados bajo su liderazgo como el mejor técnico de la historia del club.',
        backendTechnologies: [],
        database: null,
        frontendTechnologies: [
            {
                source : '/technologies/react.svg',
                alt: 'React',
                dataTip: 'React'
            },
            {
                source : '/technologies/tailwind.svg',
                alt: 'Tailwind CSS',
                dataTip: 'Tailwind CSS'
            }
        ],
        repository: 'https://github.com/PaoloAleman/Gallardo',
        deploy: 'https://riverdegallardo.netlify.app/',
        items: [ ],
        itemsTitle: '',
        apis: [],
        icon: {
            source: '/projects/river.svg',
            alt: 'River',
            dataTip:'Kirby'
        }
    },
    {
        title: 'TuristeAR',
        images: [
            {
                source: '/projects/turisteAR.png',
                alt: 'Home',
                dataTip: 'Home'
            }
        ],
        description: 'TuristeAR es una app que crea itinerarios personalizados y permite compartir experiencias, recomendaciones y consejos con otros viajeros en su sección de comunidad.',
        backendTechnologies: [
            {
                source : '/technologies/nodejs.svg',
                alt: 'Node.js',
                dataTip: 'Node.js'
            }
        ],
        database: {
            source: '/technologies/mysql.svg',
            alt: 'MySQL',
            dataTip: 'MySQL'
        },
        frontendTechnologies: [
            {
                source : '/technologies/react.svg',
                alt: 'React',
                dataTip: 'React'
            },
            {
                source : '/technologies/tailwind.svg',
                alt: 'Tailwind CSS',
                dataTip: 'Tailwind CSS'
            }
        ],
        repository: 'https://github.com/orgs/TuristeAR/repositories',
        deploy: '',
        items: [
            {
                title: 'Destinos',
                description: 'Explora todos los lugares de Argentina.',
            },
            {
                title: 'Comunidad',
                description: 'Comparte experiencias e interactúa con otros viajeros.',
            },
            {
                title: 'Armá tu viaje',
                description: 'Crea un itinerario personalizado respondiendo algunas preguntas.',
            },
        ],
        itemsTitle: 'Secciones',
        apis: [
            {
                title: 'Google OAuth2',
                description: 'Iniciar sesión.',
            },
            {
                title: 'FullCalendar',
                description: 'Calendario interactivo.',
            },
            {
                title: 'Google Places',
                description: 'Obtener los lugares y generar el itinerario.',
            },
            {
                title: 'Google Maps',
                description: 'Mapa interactivo.',
            },
            {
                title: 'GeoRef',
                description: 'Obtener las provincias y localidades argentinas.',
            },
            {
                title: 'Imgur',
                description: 'Guardar las imágenes.',
            },
        ],
        icon: {
            source: '/projects/turistearIcon.png',
            alt: 'TuristeAR',
            dataTip:'TuristeAR'
        }
    },
]

export const Projects = () => {
    return (
        <>
            <h2 className={'text-4xl font-bold text-center my-16'}>Projects</h2>
            <div className={'flex items-center lg:justify-between flex-wrap md:gap-0 gap-8 w-[95%] mx-auto'}>
                {dataProjects.map((data, index) => (
                    <ProjectCard project={data} key={index}/>
                ))}
            </div>
        </>
    )
}