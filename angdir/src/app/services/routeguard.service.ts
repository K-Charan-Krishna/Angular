import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivate {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class routeguard implements CanDeactivate<IDeactivate> {
  
canDeactivate(
component: IDeactivate,
currentRoute: ActivatedRouteSnapshot,
currentState: RouterStateSnapshot,
nextState?: RouterStateSnapshot
){
  return component.canExit();
}
} 
