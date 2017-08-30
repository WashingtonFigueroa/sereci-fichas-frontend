import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
        if (localStorage.getItem('token')) {
            // Como esta logueado devuelve true
            //this.router.navigate(['/usuarios']);
            return true;
        }
        // Como no esta logueado se redirecciona a la pagina de login con la url de retorno
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
  }
}
