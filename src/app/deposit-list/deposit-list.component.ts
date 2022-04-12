import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Deposit } from '../deposit';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.css']
})
export class DepositListComponent implements OnInit {

   deposit: any;
   customer_id:Number;  

  constructor(private adminService : AdminService,
    private router: Router,
    private route: ActivatedRoute,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.customer_id=this.route.snapshot.params['customer_id'];

    this.adminService.depositHistory(this.customer_id).subscribe(data=>{
    this.deposit=data;
    }, error => console.log(error));

  }

  CustomerSection():any{
    this.router.navigate(['customer',this.customer_id])
  }

}
