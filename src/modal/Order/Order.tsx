import { Adress } from "../Address/Adress";
import { Sku } from "../Sku/Sku";
import { User } from "../User/User";

export interface Order {
  id: number;
  itemPrice: number;
  tax: number;
  totalPrice: number;
  status: number;
  stockKeepingUnit: Sku;
  user: User;
  address: Adress;
}
