import { IPayament, TPayamentData } from "../payament-interface/payament-interface";

export class CheckoutCart{
    private readonly payamentMethod:IPayament
    private readonly payamentData:TPayamentData

    constructor(payamentMethod:IPayament, payamentData:TPayamentData){
        this.payamentMethod = payamentMethod
        this.payamentData = payamentData
    }

    payCart():void{
        this.payamentMethod.pay(this.payamentData)
    }
}