import IProductImage from "./productImage.type";
import IToken from "./token.type";

export default interface IProduct {
  id: number;
  name: string;
  description: string;
  weight: number;
  bundle_price: number;
  price: number;
  once_sold: boolean;
  token_id: number;
  productImages: IProductImage[];
  token: IToken;
}
