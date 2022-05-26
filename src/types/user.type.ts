import IOrder from "./order.type"
import IProductReview from "./productReview.type"

export default interface IUser {
  id?: any | null,
  name: string,
  email: string,
  password: string,
  roles?: Array<string>
  orders?: IOrder[]
  productReviews?: IProductReview[];
}
