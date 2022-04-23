import { Product } from "./Product";

export class ProductRepo {
  private products: Product[] = [
    
  ];

  constructor() {}

  getProducts = (): Product[] => {
    return this.products;
  };
}
