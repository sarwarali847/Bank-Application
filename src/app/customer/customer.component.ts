import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  id:number;
  customer: any;
  greet : any;
  myDate : Date = new Date();
  myHrs: any;

  constructor(private adminService: AdminService,
    public loginService : AuthenticationServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.myHrs = this.myDate.getHours();
    this.g();
    this.id=this.route.snapshot.params['customer_id'];
    this.customer=new Customer();
    this.adminService.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
    });
        

      

  }

g(){
  if (this.myHrs < 12)
        this.greet = 'Good Morning';
    else if (this.myHrs >= 12 && this.myHrs <= 17)
        this.greet = 'Good Afternoon';
    else if (this.myHrs >= 17 && this.myHrs <= 24)
        this.greet = 'Good Evening';
}

  depositHistory(customer_id:number){
    this.router.navigate(['deposit-list',customer_id]);
  }
  withdrawHistory(customer_id:number){
    this.router.navigate(['withdraw-list',customer_id]);
  }
  transferHistory(customer_id:number){
    this.router.navigate(['transfer-list',customer_id]);
  }
  Deposit(customer_id:number){
    this.router.navigate(['deposit',customer_id]);
  }
  Transfer(customer_id:number){
    this.router.navigate(['transfer',customer_id]);
  }

  Withdraw(customer_id:number){
    this.router.navigate(['withdraw',customer_id]);
  }

  Update(customer_id:number){
    this.router.navigate(['update-customer2',customer_id]);
  }



}
