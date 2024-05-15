import { Tag } from "./Tag";

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    url: string;
    tags: Tag[];
}