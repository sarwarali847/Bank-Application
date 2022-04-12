import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Transfer } from '../transfer';
import Swal from 'sweetalert2';
import { Customer } from '../customer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transfer: Transfer = new Transfer();
  transfer_to_id:number;
  customer_id:number; 
  customer:any;
  customer_to:number;
  myId2:number;
  bal2Error:boolean=false;
 

  constructor(private adminService: AdminService,
    public loginService : AuthenticationServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.customer_id=this.route.snapshot.params['customer_id'];
   
    this.transfer.customerBean.customer_id=this.customer_id;
    this.myId2=this.transfer.customerBean.customer_id;

    this.adminService.getCustomerById(this.customer_id).subscribe(data=>{
      this.customer=data;
      }, error => console.log(error));

     

  }
  transferAmnt(){
    if(this.transfer.transfer_amnt<0 || this.transfer.transfer_amnt===0)
    {
      this.errorAlertBox();
      this.bal2Error=true;
    }
    else
    {
    this.adminService.TransferAmnt(this.customer_id,this.transfer).subscribe(data=>{
     
      //console.log(data);
      //alert("Money Transferred Successfully !!")
      this.getData();
      this.successAlertBox();
      this.goToCustomerSection();

    },
    error => this.errorAlertBox());
  
  }
}


getData():number{
  this.customer_to=this.transfer.transfer_amnt_to;
  return this.customer_to;
}


  goToCustomerSection(){
    this.router.navigate(['/customer',this.customer_id]);

  }

  CustomerSection():any{
    this.router.navigate(['customer',this.customer_id]);

  }

  

  Cancel():any{
    this.router.navigate(['customer',this.customer_id]);

  }

  onSubmit(){
    console.log(this.transfer);
    this.transferAmnt();

  }
  successAlertBox(){
    Swal.fire('Transaction Successfull', '₹'+this.transfer.transfer_amnt +' Transfered succesfully to Customer id '+this.transfer.transfer_amnt_to, 'success')
  }

  errorAlertBox() {
    Swal.fire('Failed', 'An error occured', 'error');
}

}
