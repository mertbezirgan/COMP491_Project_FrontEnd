import IOrder from "./order.type"

export default interface IUser {
  id?: any | null,
  name: string,
  email: string,
  password: string,
  roles?: Array<string>
  orders?: IOrder[]
}