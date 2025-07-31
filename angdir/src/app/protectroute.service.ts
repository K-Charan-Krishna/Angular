import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProtectrouteService implements CanActivate {
  

  constructor(private cookies:CookieService,private route:Router) { }
 

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
     const jwt= this.cookies.get('jwt')
    //  if(jwt===''){
    //   this.route.navigate(['/login'])
    //   return false 
    //  }
    //  else{
    //   return true
    //  }
    return true
   }
}
