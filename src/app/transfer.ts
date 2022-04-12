import { Data } from "@angular/router";
import { Customer } from "./customer";


export class Transfer {
        
    teansfer_id:number;
    trasnfered_at:Data;
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
    };
    transfer_amnt_to:number;
    transfer_amnt:number;
    availabel_balance:number;

}
