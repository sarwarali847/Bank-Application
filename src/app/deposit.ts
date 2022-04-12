import { Customer } from "./customer";
import { Bank } from "./bank";


export class Deposit {
    deposit_id:number;
    deposited_at:Date;
    customerBean:Customer = {
        customer_id:undefined,
        bankBean:undefined,
        account_type:undefined,
        account_no:undefined,
        balance:undefined,
        first_name:undefined,
        last_name:undefined,
        email:undefined,
        password:undefined,
        adhar:undefined,
        pan:undefined,
        phoneno:undefined,
        dob:undefined,
        city:undefined,
        state:undefined
    }
    deposit_amnt:number;
    availabel_balance:number;
}
