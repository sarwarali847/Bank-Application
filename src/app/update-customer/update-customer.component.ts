import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer:any;
  customer_id:number;

  constructor(private adminService: AdminService, 
    private route: ActivatedRoute,
    public loginService : AuthenticationServiceService, 
    private router: Router) { }

  ngOnInit(): void {
    this.customer_id=this.route.snapshot.params['customer_id'];

    this.adminService.getCustomerById(this.customer_id).subscribe(data=>{
    this.customer=data;
    }, error => console.log(error));
  }

  onSubmit(){  
    console.log(this.customer);
    this.adminService.updateCustomer(this.customer_id, this.customer).subscribe(data=>{
    this.goToCustomerList();
    },error => this.errorAlertBox());

}
goToCustomerList(){
  this.router.navigate(['/customer-list']);
}
errorAlertBox() {
  Swal.fire('Oops', 'An error occured', 'error');
}

}
