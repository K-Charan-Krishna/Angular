import { Injectable } from '@angular/core';
import {Products } from './services/product.service'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectadminService implements CanActivate{

  constructor(private product:Products) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    return this.product.isAdmin? true: false
    
  }
  
}
