interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    email: string;
    heroImage: Image;
    name: string;
    backgroundInformationTitle: string;
    backgroundInformation: text;
    profilePic: Image;
    role: string;
}
export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateEnded: date;
    dateStarted: date;
    jobTitle: string;
    jobLink: string;
    points: string[];
    technologies: Skill[];
}
export interface Project extends SanityBody {
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Skill[] 
    title: string;
}
export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

