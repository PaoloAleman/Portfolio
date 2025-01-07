export type Technology = {
    source: string;
    alt: string;
};

export type Image = {
    source: string;
    alt: string;
};

export type Item = {
    title: string;
    description: string;
};

export type Section = {
    title: string;
    items: Item[];
};

export type Link = {
    source: string;
    alt: string;
    url: string;
};

export type Project = {
    title: string;
    images: Image[];
    description: string;
    technologies: Technology[];
    repository: Link;
    deploy: Link;
    sections: Section[];
    icon: Image;
};
