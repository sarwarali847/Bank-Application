import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';
import { Customer } from '../customer';

@Component({
  selector: 'app-addcustomer2',
  templateUrl: './addcustomer2.component.html',
  styleUrls: ['./addcustomer2.component.css']
})
export class Addcustomer2Component implements OnInit {

  customer: Customer = new Customer();
  bankBean:Bank = new Bank();

  constructor(private adminService: AdminService,
    private router:Router,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.adminService.createCustomer(this.customer).subscribe(data=>{
      console.log(data);
      this.goToCustomerList();
    },
    error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customer-list']);

  }
  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }


}
