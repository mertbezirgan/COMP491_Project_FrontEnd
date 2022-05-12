import IProduct from "./product.type";

export default interface IStockKeepingUnit {
  id: number;
  sku: string;
  is_available: boolean;
  stock: number;
  size: string;
  product_id: number;
  product: IProduct;
}
