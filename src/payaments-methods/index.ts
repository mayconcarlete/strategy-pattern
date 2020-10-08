import { IPayament } from "../payament-interface/payament-interface";
import { MasterPayament } from "./master-method";
import { PaypalPayament } from "./paypal-method";
import { VisaPayament } from "./visa-method";

export default {
    visa: new VisaPayament(),
    master: new MasterPayament(),
    paypal: new PaypalPayament()
} as {
    [key:string]: IPayament
}