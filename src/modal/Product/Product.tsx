import { Sku } from "../Sku/Sku";
import { Token } from "../Token/Token";
import { ProductReview } from "./ProductReview";

export interface Product {
    id: number;
    name: string;
    description: string;
    weight: number;
    bundlePrice: number;
    price: number;
    onceSold: number;
    token: Token | null;
    tokenId: number;
    images: string[];
    stockKeepingUnits: Sku[];
    productReviews: ProductReview[];
}