import { Product } from "./Product";

export class ProductRepo {
  private products: Product[] = [
    // {
      // data: [
          // {
          //     id: "7",
          //     name: "p8",
          //     description: "desc",
          //     weight: 2,
          //     bundlePrice: 350,
          //     price: 240,
          //     onceSold: false,
          //     tokenId: "7",
          //     token: {
          //         id: "7",
          //         tokenAddress: "0xabcdef",
          //         imageUrl: "https://image.shutterstock.com/image-vector/blank-white-tshirt-template-260nw-655190332.jpg"
          //     },
          //     images: [
          //         {
          //             id: "7",
          //             image_url: "https://media.istockphoto.com/photos/front-back-and-34-views-of-white-tshirt-on-isolated-on-white-hip-hop-picture-id1225397516?k=20&m=1225397516&s=612x612&w=0&h=Ubp9vHi5pL2_8AyXgbpqM-kO17dpKsYBqzwG3VZ5cg8=",
          //             alt_text: "alt1",
          //             product_id: "7"
          //         }
          //     ]
          // // }
      // "success": true
  // }
    
  ];

  constructor() {}

  getProducts = (): Product[] => {
    return this.products;
  };
}
