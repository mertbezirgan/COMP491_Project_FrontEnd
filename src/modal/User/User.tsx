import { Adress } from "../Address/Adress";
import { Order } from "../Order/Order";
import { ProductReview } from "../Product/ProductReview";

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  lastLogin: string;
  isStaff: boolean;
  isActive: boolean;
  productReviews: ProductReview[];
  orders: Order[];
  addresses: Adress[];
}
