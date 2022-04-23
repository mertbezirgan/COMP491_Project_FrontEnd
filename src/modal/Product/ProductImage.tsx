import { Product } from "./Product";

export interface ProductImage {
  id: number;
  image_url: string;
  alt_text: string;
  product_id: number;
  product: Product | null;
}
