import { Bank } from "./bank";


export class Customer {
    customer_id:number;
    bankBean:Bank = {
        bank_id:undefined,
        bank_name:undefined,
        branch:undefined,
        ifsc_code:undefined,
        description:undefined
    }
    account_type:string;
    account_no:string;
    balance:number;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    adhar:string;
    pan:string;
    phoneno:string;
    dob:Date
    city:string;
    state:string;

}
