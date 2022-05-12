import IAddress from "./address.type";
import IStockKeepingUnit from "./stockKeepingUnit.type";

export default interface IOrder {
  id: number;
  item_price: number;
  tax: number;
  total_price: number;
  status: number;
  address: IAddress;
  stockKeepingUnit: IStockKeepingUnit;
  createdAt: string;
}
