import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2Service {

  constructor(private router: Router,
    private authService: AuthenticationServiceService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
      if (this.authService.isCustomerLoggedIn())
        return true;
      this.showWarningAlert();
      this.router.navigate(['/home']);
      return false;
  }
  showWarningAlert() {
    Swal.fire('Hey!', 'This is a restricted zone', 'warning')
  }
}
