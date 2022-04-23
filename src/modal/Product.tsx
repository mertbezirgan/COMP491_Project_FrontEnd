export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    created_by: string;
    owned_by: string;
    artist: string;
    year: number;
    project: string;
    size: string[];
    type: string;
    activity: string[][];
    about_project: string;
}