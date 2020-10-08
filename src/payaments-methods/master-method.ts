import { IPayament, TPayamentData } from "../payament-interface/payament-interface";

export class MasterPayament implements IPayament{
    pay(payamentData:TPayamentData):void{
        console.log(`You are paying ${payamentData.price} with Master Card`)    
    }
}