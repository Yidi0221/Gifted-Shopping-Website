import { Product } from './product'

export class Order {
    constructor(public id: string, 
        public productList: Array<Product>,        
        public orderDate: Date,
        public userAccountID: string,
        public receiverName: string,
        public state: string,
        public zipCode: Number,
        public addressLine1: string,
        public addressLine2?: string
    ) {}
}