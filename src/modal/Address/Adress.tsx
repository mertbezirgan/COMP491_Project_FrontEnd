import { Order } from "../Order/Order";
import { User } from "../User/User";

export interface Adress {
  id: number;
  title: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  city: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
  user: User;
  orders: Order[];
}
