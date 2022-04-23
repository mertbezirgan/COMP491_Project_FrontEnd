import { Product } from "./Product";

export class ProductRepo {
  private products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://cdn.dsmcdn.com/mnresize/500/-/ty226/product/media/images/20211105/17/166300686/242853446/1/1_org.jpg",
      description: "One of the most stylish ones",
      created_by: "shibArmy",
      owned_by: "shibArmy",
      artist: "shibArmy",
      year: 2022,
      project: "Essentials",
      size: ["xs", "m", "l", "xl", "xxl"],
      type: "Hoodie",
      activity: [["Minted", "", "NullAdres", "shibArmy", "1650719247"],["List", "100", "shibArmy", "", "1650719319"]],
      about_project: "This is a project about essentials"
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
