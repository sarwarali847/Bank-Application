import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';


@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  transfer:any;
  customer:any;
  transfer_data:any;
  customer_id:Number;  

  constructor(private adminService : AdminService,
    private router: Router,
    private route: ActivatedRoute,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.customer_id=this.route.snapshot.params['customer_id'];

    
    console.log(this.transfer_data);
  
    this.adminService.transferHistory(this.customer_id).subscribe(data=>{
    this.transfer=data;
    }, error => console.log(error));

   
  }
  CustomerSection():any{
    this.router.navigate(['customer',this.customer_id])
  }

}
