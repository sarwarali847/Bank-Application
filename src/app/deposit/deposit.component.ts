import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Deposit } from '../deposit';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  deposit: Deposit = new Deposit();
  customer_id:number; 
  customer:any;
  myId:number;
  balError:boolean=false;
 

  constructor(private adminService: AdminService,
    public loginService : AuthenticationServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.customer_id=this.route.snapshot.params['customer_id'];
    
    this.deposit.customerBean.customer_id=this.customer_id;
    this.myId=this.deposit.customerBean.customer_id;
    this.adminService.getCustomerById(this.customer_id).subscribe(data=>{
      this.customer=data;
      }, error => console.log(error));

  }
  depositAmnt(){
    if(this.deposit.deposit_amnt<0 || this.deposit.deposit_amnt===0)
    {
      this.errorAlertBox();
      this.balError=true;
    }
    else
    {
    this.adminService.DepositAmnt(this.customer_id,this.deposit).subscribe(data=>{
     
     // console.log(data);
      //alert("Money Deposited Successfully !!")
      this.successAlertBox();
      this.goToCustomerSection();
    },
    error => console.log(error));
  }
}

  goToCustomerSection(){
    this.router.navigate(['/customer',this.customer_id]);

  }

  CustomerSection():any{
    this.router.navigate(['/customer',this.customer_id]);

  }
  onSubmit(){
    console.log(this.deposit);
    this.depositAmnt();
  }

  successAlertBox(){
    Swal.fire('Transaction Successfull', '₹'+this.deposit.deposit_amnt+' Deposited succesfully!', 'success')
  }

  errorAlertBox() {
    Swal.fire('Oops', 'An error occured', 'error');
}

}
