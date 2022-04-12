import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';
import { Customer } from '../customer';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
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
    error => this.errorAlertBox());
  }

  goToCustomerList(){
    this.router.navigate(['/customer-list']);

  }
  onSubmit(){
    console.log(this.customer);
    
    this.saveCustomer();

  }
  errorAlertBox() {
    Swal.fire('Oops', 'An error occured', 'error');
}

}
