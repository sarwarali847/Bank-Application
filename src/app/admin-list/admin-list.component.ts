import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins:Admin[];

  constructor(private adminService : AdminService,
                  private router: Router,
                  public loginService:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getAdmin();
  }
  private getAdmin(){
    this.adminService .getAdminList().subscribe(data => {
      this.admins=data;
      
    })
}
deleteAdmin(id:number){
  this.adminService.deleteAdmin(id).subscribe(data=>{
    console.log(data);
    this.getAdmin();
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

      this.deleteAdmin(id);

    } else if (result.isDismissed) {

      console.log('Clicked No, File is safe!');

    }
  })

}

updateAdmin(admin_id:number){
  this.router.navigate(['update-admin',admin_id]);
}
addAdmin(){
  this.router.navigate(['add-admin'])
}

}
