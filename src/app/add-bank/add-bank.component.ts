import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  bank: Bank = new Bank();
  

  constructor(private adminService: AdminService,
    private router:Router,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
  }
  saveBank(){
    this.adminService.createBank(this.bank).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/bank-list']);

  }
  onSubmit(){
    console.log(this.bank);
    this.saveBank();
  }


}
