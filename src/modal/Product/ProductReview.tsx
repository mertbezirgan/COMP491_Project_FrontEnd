import { User } from "../User/User";
import { Product } from "./Product";

export interface ProductReview {
    id: number;
    productId: number;
    userId: number;
    review: string;
    points: number;
    product: Product | null;
    user: User | null;
}