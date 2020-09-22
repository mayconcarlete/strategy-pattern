import payamentMethods from './payaments-methods'
import {CheckoutCart} from './checkout/checkout'

const arrayOfPayaments:string[] = []
Object.keys(payamentMethods).map( method => arrayOfPayaments.push(method))
console.log(`----Printing available methods----`)
console.log(arrayOfPayaments)

//choosing some method
const clientOption = payamentMethods['visa']

if(clientOption){
    const checkout = new CheckoutCart(clientOption, 100)
    checkout.payCart()
}else{
    console.log('Invalid payament method')
}

