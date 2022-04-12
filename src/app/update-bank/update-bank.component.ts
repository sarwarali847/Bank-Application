import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {

  bank:any;
  bank_id:number;

  constructor(private adminService: AdminService, 
    private route: ActivatedRoute,
    public loginService : AuthenticationServiceService, 
    private router: Router) { }

  ngOnInit(): void {
    this.bank_id=this.route.snapshot.params['bank_id'];

    this.adminService.getBankById(this.bank_id).subscribe(data=>{
    this.bank=data;
    }, error => console.log(error));
  }

  onSubmit(){  
    console.log(this.bank);
    this.adminService.updateBank(this.bank_id, this.bank).subscribe(data=>{
    this.goToBankList();
    },error => console.log(error));

}

goToBankList(){
  this.router.navigate(['/bank-list']);
}

}
