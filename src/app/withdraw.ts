import { Customer } from "./customer";


export class Withdraw {

    withdraw_id:number;
    withdrawed_at:Date;
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
    withdraw_amnt:number;
    availabel_balance:number;
}
