import {ProjectCard} from "../components/ProjectCard";

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

const dataProjects : Project[] = [
    {
        title: 'Kirby Pregunta',
        image: '/projects/kirbyPregunta.png',
        description: 'KirbyPregunta es un juego de preguntas tipo ABCD para probar tus conocimientos en temas como Deportes, Arte e Historia. ¿Te animás a intentarlo?',
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
                description: 'Responde todas las preguntas que puedas antes de equivocarte. Por cada respuesta correcta, sumarás puntos y escalarás posiciones en el ranking global. ¡Las preguntas se adaptan a tu habilidad, así que cuanto mejor lo hagas, más difíciles serán!'
            },
            {
                title: 'Duelo',
                description: 'Reta a otros jugadores en un enfrentamiento directo. Gana quien logre responder más preguntas correctamente. ¡Pon a prueba tu rapidez y conocimientos!'
            },
        ],
        itemsTitle: 'Modos de juego',
        apis: [
            {
                title: 'Gmail',
                description: 'Para el registro de usuarios.',
            }
        ]

    },
    {
        title: 'River de Gallardo',
        image: '/projects/riverDeGallardo.png',
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
        apis: []
    },
    {
        title: 'TuristeAR',
        image: '/projects/turisteAR.png',
        description: 'TuristeAR es una app que crea itinerarios personalizados y permite compartir experiencias con otros viajeros en su sección de comunidad.',
        backendTechnologies: [
            {
                source : '/technologies/nodejs.svg',
                alt: 'Node.js',
                dataTip: 'Node.js'
            }
        ],
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
        ]
    },

]

export const Home = () => {
    return (
        <>
            <div className={'flex items-center justify-around'}>
                {dataProjects.map((data, index) => (
                    <ProjectCard project={data} key={index} />
                ))}
            </div>
        </>
    )
}