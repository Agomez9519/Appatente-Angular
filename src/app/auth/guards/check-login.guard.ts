import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(
    //instanciamos el servicio 
    private authSvc: AuthService
  ) { }

  canActivate(): Observable<boolean> {
    console.log(this.authSvc.isLogged);
   return this.authSvc.isLogged.pipe(
    take(1),
    map((isLogged: boolean) => isLogged)
    )
   
  }
  
}
