import { IProduct } from "./products.interface";

export interface UserClass {
    id:         number;
    name:       string;
    email:      string;
    address:    string;
    phone:      string;
    role:       string;
    orders:     any[];
}

export interface IOrder {
    id:         number;
    status: string;
    date: string;
    products: IProduct[];
}
