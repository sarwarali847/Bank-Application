import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Customer } from '../customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  invalidAdminLogin = false
  invalidCustomerLogin = false
  admin: Admin = new Admin();
  customer: Customer =new Customer();
  customers: Customer[];
  admins: Admin[];
  invalid1:boolean=false;
  invalid2:boolean=false;
  customer_id:any;


  constructor(private adminService: AdminService,
    private loginservice : AuthenticationServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
   this.getCustomers();

  }
  checkLogin(){
    //console.log("email: "+this.adminEmail+", password: "+this.adminPassword);
    if (this.authAdmin(this.admin.email, this.admin.password)
    ) {
     
      this.router.navigate(['admin'])
      //alert("Admin Login Successfull !")
      this.successAlertBox1();
      this.invalidAdminLogin = false
    }
    
    else
    //alert("Email or Password is Incorrect !")
    this.errorAlertBox();
      this.invalidAdminLogin = true
  }

  authAdmin(adminEmail,adminPassword):any{
    
    for (let index = 0; index < this.admins.length; index++) {
      if(this.admins[index].email === adminEmail &&
        this.admins[index].password === adminPassword){
        sessionStorage.setItem('adminEmail', adminEmail)
        return true;  
      }
      this.invalid1=true;
  }
}


customerLogin(){
  //console.log("email: "+this.adminEmail+", password: "+this.adminPassword);
  if (this.authCustomer(this.customer.email, this.customer.password))
   {
    
    this.router.navigate(['/customer',this.customer_id])
    this.successAlertBox2();
    this.invalidCustomerLogin = false
  }
  
  else
  //alert("Email or Password is Incorrect !")
  this.errorAlertBox();
    this.invalidCustomerLogin = true
}


authCustomer(customerEmail,customerPassword):any{
  
  for (let index = 0; index < this.customers.length; index++) {
    if(this.customers[index].email === customerEmail &&
      this.customers[index].password === customerPassword){  
       this.getCustomerId();
      sessionStorage.setItem('customerEmail', customerEmail)
      return true;  
    }
    this.invalid2=true;
}
}



getCustomerId(){
  this.adminService.CustomerIdByEmail(this.customer.email).subscribe(data => {
    this.customer_id=data;
    console.log("Id:"+this.customer_id);
  }, error => console.log(error));
}

//For Admin
  getAdmins() {
    return this.adminService.getAdminList().subscribe((data) => {
      this.admins = data;
      console.log(this.admins);
    })
  }


  //For Customers
  getCustomers() {
    return this.adminService.getCustomerList().subscribe((data) => {
      this.customers = data;
      console.log(this.customers);
    })
  }

  successAlertBox1() {
    Swal.fire('Whooa!', this.admin.email+' Logged in successfully!', 'success')
}
successAlertBox2() {
  Swal.fire('Whooa!', this.customer.email+' Logged in successfully!', 'success')
}

errorAlertBox() {
  Swal.fire('Oops', 'An error occured', 'error');
}

 
  
}
