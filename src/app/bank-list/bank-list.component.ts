import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Bank } from '../bank';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

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

  deleteBank(id:number){
    this.adminService.deleteBank(id).subscribe(data=>{
      console.log(data);
      this.getBank();
    })
  }
  handleWarningAlert(id:number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this details!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
  
      if (result.isConfirmed) {
  
        this.deleteBank(id);
  
      } else if (result.isDismissed) {
  
        console.log('Clicked No, File is safe!');
  
      }
    })
  
  }
  
  updateBank(bank_id:number){
    this.router.navigate(['update-bank',bank_id]);
  }
  addBank(){
    this.router.navigate(['add-bank'])
  }
  

}
