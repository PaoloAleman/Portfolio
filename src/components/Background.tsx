import Particles from "react-tsparticles";

export const Background = () => {
    return (
        <Particles
            options={{
                background: {
                    color: {
                        value: "#000"
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800
                        },
                        value: 100
                    },
                    size: {
                        value: 3
                    }
                }
            }}
        />
    );
};
