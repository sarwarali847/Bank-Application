import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-admin2',
  templateUrl: './add-admin2.component.html',
  styleUrls: ['./add-admin2.component.css']
})
export class AddAdmin2Component implements OnInit {
  admin: Admin = new Admin();
  constructor(private adminService: AdminService,
    private router:Router) { }

  ngOnInit(): void {
  }

  
  saveAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/home']);

  }
  onSubmit(){
    console.log(this.admin);
    this.saveAdmin();
  }


}
