import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';
import { Customer } from '../customer';

@Component({
  selector: 'app-sortbyemail',
  templateUrl: './sortbyemail.component.html',
  styleUrls: ['./sortbyemail.component.css']
})
export class SortbyemailComponent implements OnInit {

  customers: Customer[];
  banks : Bank[];

  constructor(private adminService : AdminService,
    private router: Router,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  private getCustomer(){
    this.adminService .SortByEmail().subscribe(data => {
      this.customers=data;
      
    })
  }

  deleteCustomer(id:number){
    this.adminService.deleteCustomer(id).subscribe(data=>{
      console.log(data);
      this.getCustomer();
    })
  }
  
  updateCustomer(customer_id:number){
    this.router.navigate(['update-customer',customer_id]);
  }
  addCustomer(){
    this.router.navigate(['add-customer'])
  }
  

}
