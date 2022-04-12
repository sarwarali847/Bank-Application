import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  admin: Admin = new Admin();
  constructor(private adminService: AdminService,
    private router:Router,
    public loginService:AuthenticationServiceService) { }

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
    this.router.navigate(['/admin-list']);

  }
  onSubmit(){
    console.log(this.admin);
    this.saveAdmin();
  }

}
