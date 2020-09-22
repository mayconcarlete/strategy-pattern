import { IPayament } from "../payament-interface/payament-interface";

export class VisaPayament implements IPayament{
    pay(price:number):void {
        console.log(`You are paying ${price} with Visa`)
    }
}