import { Link } from 'react-scroll';

export const Menu = () => {
    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
            <ul className="menu menu-horizontal bg-base-200 rounded-box animate-slide-up">
                <li>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={800}
                        className="tooltip"
                        data-tip="Home"
                    >
                        <img src={'/menu/home.svg'} alt={'Home'} className={'w-10'} />
                    </Link>
                </li>
                <li>
                    <Link
                        to="works"
                        smooth={true}
                        duration={800}
                        className="tooltip"
                        data-tip="Works"
                    >
                        <img src={'/menu/work.svg'} alt={'Works'} className={'w-10'} />
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={800}
                        className="tooltip"
                        data-tip="Projects"
                    >
                        <img src={'/menu/projects.svg'} alt={'Projects'} className={'w-10'} />
                    </Link>
                </li>
            </ul>
        </div>
    );
};
