import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout-customer',
  templateUrl: './logout-customer.component.html',
  styleUrls: ['./logout-customer.component.css']
})
export class LogoutCustomerComponent implements OnInit {

  constructor(private loginservice : AuthenticationServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //alert("Logout Successfull !")
    this.successAlertBox();
    this.loginservice.logOutCustomer();
    this.router.navigate(['home']);
  }
  successAlertBox(){
    Swal.fire('Thank you...', 'Logout succesfull!', 'success')
  }

}
