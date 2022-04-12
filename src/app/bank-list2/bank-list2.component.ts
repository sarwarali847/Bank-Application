import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-bank-list2',
  templateUrl: './bank-list2.component.html',
  styleUrls: ['./bank-list2.component.css']
})
export class BankList2Component implements OnInit {

  banks: Bank[];

  constructor(private adminService : AdminService,
    private router: Router,
    public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getBank();
  }

  private getBank(){
    this.adminService.getBankList().subscribe(data => {
      this.banks=data;
    })
  }

}
