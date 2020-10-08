export type TPayamentData = {
    cardNumber: number
    method: string
    ccv: number
    date: string
    price: number
}

export interface IPayament{
    pay(payamentData:TPayamentData):void
}   