import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  admin:any;
  admin_id:number;

  constructor(private adminService: AdminService, 
    public loginService : AuthenticationServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.admin_id=this.route.snapshot.params['admin_id'];

    this.adminService.getAdminById(this.admin_id).subscribe(data=>{
    this.admin=data;
    }, error => console.log(error));

  }

  onSubmit(){  
    console.log(this.admin);
    this.adminService.updateAdmin(this.admin_id, this.admin).subscribe(data=>{
    this.goToAdminList();
    },error => console.log(error));

}

goToAdminList(){
  this.router.navigate(['/admin-list']);
}

}
