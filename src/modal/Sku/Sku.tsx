import { size } from "../../constants/enums";
import { Order } from "../Order/Order";
import { Product } from "../Product/Product";

export interface Sku {
  id: number;
  sku: string;
  isAvailable: boolean;
  stock: number;
  size: size;
  productId: number;
  product?: Product;
  orders: Order[];
}
