export default interface IProduct {
    bundle_price: number;
    createdAt: string;
    desc: string;
    id?: any | null,
    name: string;
    once_sold: boolean;
    price: number;
    productImages: [];
    productReviews: [];
    stockKeepingUnits: [];
    token: any;
    token_id: string;
    updatedAt: string;
    weight: number;
};