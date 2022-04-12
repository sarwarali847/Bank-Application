import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-withdraw-list',
  templateUrl: './withdraw-list.component.html',
  styleUrls: ['./withdraw-list.component.css']
})
export class WithdrawListComponent implements OnInit {

  withdraw:any;
  customer_id:Number;  

  constructor(private adminService : AdminService,
    private router: Router,
    private route: ActivatedRoute,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.customer_id=this.route.snapshot.params['customer_id'];

    this.adminService.withdrawHistory(this.customer_id).subscribe(data=>{
    this.withdraw=data;
    }, error => console.log(error));

  }
  CustomerSection():any{
    this.router.navigate(['customer',this.customer_id])
  }

}
