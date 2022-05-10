import axios from "axios";
import { productRoutes } from "../../constants/routes";

const listProduct = async (input: any) => {
  //TODO add input type
  return axios.post(productRoutes.list, input);
};

export { listProduct };
