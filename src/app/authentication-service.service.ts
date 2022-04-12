import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from './admin';
import { AdminService } from './admin.service';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  admins: Admin[];
  admin: Admin = new Admin();
  customer: Customer = new Customer();

  constructor(private adminService: AdminService, 
    private route: ActivatedRoute,
    private router: Router) { }

    
  

  isAdminLoggedIn(){
    let admin = sessionStorage.getItem('adminEmail');
    console.log(!(admin === null))
    return !(admin === null)
  }

  isCustomerLoggedIn(){
    let customer = sessionStorage.getItem('customerEmail');
    console.log(!(customer === null))
    return !(customer === null)
  }

  logOut() {
    sessionStorage.removeItem('adminEmail')
  }

  logOutCustomer() {
    sessionStorage.removeItem('customerEmail')
  }

 




}
