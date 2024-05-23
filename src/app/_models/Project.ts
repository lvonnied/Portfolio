import { Tag } from "./Tag";

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    url: string;
    url_text: string;
    tags: Tag[];
}