import axios from "axios";
import { productRoutes } from "../../constants/routes";

const listProduct = async (input: any) => {
  //TODO add input type
  return axios.post(productRoutes.list, input);
};

const getProduct = async (productId: number) => {
  try {
    let data = await axios.get(productRoutes.create + `/${productId}`);
    if (!data || !data.data.success) return null;

    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { listProduct, getProduct };
