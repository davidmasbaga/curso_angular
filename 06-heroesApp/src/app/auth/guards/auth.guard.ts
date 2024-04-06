import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor(private route:Router) { }

  canMatch(route:Route,segments:UrlSegment[]):boolean | Observable<boolean>{

    console.log('canMatch');
    console.log({route,segments});

    return false; // No dejamos pasar
}
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean|Observable<boolean>{
    console.log('canActivate');
    console.log({route,state});

    return false; // No dejamos pasar

}



}

export const AuthGuardMatch : CanMatchFn = (route:Route,segments:UrlSegment[]):boolean | Observable<boolean> =>{
  return inject(AuthGuard).canMatch(route,segments)
}
export const AuthGuardActivate : CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | Observable<boolean> => {
  return inject(AuthGuard).canActivate(route,state)
}
