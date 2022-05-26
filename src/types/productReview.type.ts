import IUser from "./user.type";
import IProduct from "./product.type";

export default interface IProductReview {
    id: number;
    productId: number;
    userId: number;
    review: string;
    points: number;
    product: IProduct | null;
    user: IUser | null;
}