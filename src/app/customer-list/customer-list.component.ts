import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';
import { Customer } from '../customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  banks : Bank[];
  keyword:'';

  constructor(private adminService : AdminService,
    private router: Router,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  private getCustomer(){
    this.adminService .getCustomerList().subscribe(data => {
      this.customers=data;
      
    })
  }

  deleteCustomer(id:number){
    this.adminService.deleteCustomer(id).subscribe(data=>{
      console.log(data);
      this.getCustomer();
    })
  }
  handleWarningAlert(id:number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this details!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
  
      if (result.isConfirmed) {
  
        this.deleteCustomer(id);
  
      } else if (result.isDismissed) {
  
        console.log('Clicked No, File is safe!');
  
      }
    })
  
  }
  
  updateCustomer(customer_id:number){
    this.router.navigate(['update-customer',customer_id]);
  }
  addCustomer(){
    this.router.navigate(['add-customer'])
  }

  searchCustomer(){
    this.adminService.SearchCustomer(this.keyword).subscribe(data => {
      if(data)
      {
      this.customers=data;
      }
      if(this.keyword.includes("all"))
      {
        console.log("Name:"+this.keyword)
        this.getCustomer();
      }
      if(this.keyword.includes(null))
             this.getCustomer();
    }, error => console.log(error));
  }
  

}
