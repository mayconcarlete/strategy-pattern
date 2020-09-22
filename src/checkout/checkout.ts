import { IPayament } from "../payament-interface/payament-interface";

export class CheckoutCart{
    private readonly payamentMethod:IPayament
    private readonly price:number
    constructor(payamentMethod:IPayament, price:number){
        this.payamentMethod = payamentMethod
        this.price = price
    }

    payCart():void{
        this.payamentMethod.pay(this.price)
    }
}