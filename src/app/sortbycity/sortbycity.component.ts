import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';
import { Customer } from '../customer';

@Component({
  selector: 'app-sortbycity',
  templateUrl: './sortbycity.component.html',
  styleUrls: ['./sortbycity.component.css']
})
export class SortbycityComponent implements OnInit {

  customers: Customer[];
  banks : Bank[];

  constructor(private adminService : AdminService,
    private router: Router,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  private getCustomer(){
    this.adminService .SortByCity().subscribe(data => {
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
