import { Sku } from "../Sku/Sku";
import { Token } from "../Token/Token";
import { ProductReview } from "./ProductReview";

export interface Product {
    id: string;
    name: string;
    description: string;
    weight: number;
    bundlePrice: number;
    price: number;
    onceSold: boolean;
    tokenId: string;
    token: Token | null;
    images: string;
    stockKeepingUnits: Sku[];
    productReviews: ProductReview[];
}