export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    techStack: string[];
    keyCapabilities: string[];
    links?: {
        demo?: string;
        github?: string;
    };
    details?: {
        architecture?: string[];
        features?: string[];
        stackDetails?: {
            category: string;
            technologies: string[];
        }[];
    };
}
