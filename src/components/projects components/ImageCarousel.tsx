import React, { useEffect, useState } from "react";

type Technology = {
    source: string;
    alt: string;
    dataTip: string;
};

export const ImageCarousel = (props: { images: Technology[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { images } = props;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel h-64 relative rounded-t-2xl">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-item absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        src={image.source}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};
