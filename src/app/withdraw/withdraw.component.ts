import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Withdraw } from '../withdraw';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  withdraw: Withdraw = new Withdraw();
  customer_id:number; 
  customer:any;
  myId:number;
  bal3Error:boolean=false;

  constructor(private adminService: AdminService,
    public loginService : AuthenticationServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.customer_id=this.route.snapshot.params['customer_id'];
    
    this.withdraw.customerBean.customer_id=this.customer_id;
    this.myId=this.withdraw.customerBean.customer_id;
    this.adminService.getCustomerById(this.customer_id).subscribe(data=>{
      this.customer=data;
      }, error => console.log(error));

  }

  withdrawAmnt(){
    if(this.withdraw.withdraw_amnt<0 || this.withdraw.withdraw_amnt===0 )
    {
      this.errorAlertBox();
      this.bal3Error=true;
      
    }
    else
    {
    this.adminService.WithdrawAmnt(this.customer_id,this.withdraw).subscribe(data=>{
     
      //console.log(data);
      //alert("Money Withdrawed Successfully !!")
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
    this.router.navigate(['customer',this.customer_id]);

  }
  onSubmit(){
    console.log(this.withdraw);
    this.withdrawAmnt();
  }

  successAlertBox(){
    Swal.fire('Transaction Successfull', '₹'+this.withdraw.withdraw_amnt+' Withdrawed succesfully!', 'success')
  }

  errorAlertBox() {
    Swal.fire('Oops', 'An error occured', 'error');
}

}
