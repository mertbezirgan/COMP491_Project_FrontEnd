import { Product } from "./Product";

export class ProductRepo {
  private products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
  ];

  constructor() {}

  getProducts = (): Product[] => {
    return this.products;
  };
}
