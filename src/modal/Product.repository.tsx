import { Product } from "./Product";

export class ProductRepo {
  private products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://cdn.dsmcdn.com/mnresize/500/-/ty226/product/media/images/20211105/17/166300686/242853446/1/1_org.jpg",
      description: "One of the most stylish ones"
    },
    // {
      // id: 2,
      // name: "Product 2",
      // price: 200,
      // image: "https://via.placeholder.com/150",
      // description: "One of the most stylish ones"
    // },
  ];

  constructor() {}

  getProducts = (): Product[] => {
    return this.products;
  };
}
