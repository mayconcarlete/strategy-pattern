import payamentMethods from './payaments-methods'
import {CheckoutCart} from './checkout/checkout'
import { TPayamentData } from './payament-interface/payament-interface'

const arrayOfPayaments:string[] = []
Object.keys(payamentMethods).map( method => arrayOfPayaments.push(method))
console.log(`----Printing available methods----`)
console.log(arrayOfPayaments)

//pick some method
const payamentData:TPayamentData = {
    cardNumber:123456789,
    ccv:123,
    date:'11/11/2020',
    method:'visa',
    price:99.99
}

const clientOption = payamentMethods[payamentData.method]


if(clientOption){
    const checkout = new CheckoutCart(clientOption, payamentData)
    checkout.payCart()
}else{
    console.log('Invalid payament method')
}

