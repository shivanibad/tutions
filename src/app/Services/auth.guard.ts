import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router,private userService:UserService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // retain the url that is requested for authorization
    this.authService.redirectUrl = state.url;

    console.log('URL', state.url);

    return Observable.create((observer: Observer<boolean>) => {
      if (this.authService.loggedIn) {
        console.log('Logged in');
        observer.next(true);
      } else {
        console.log('Not Logged in');
        this.userService.openDialog();
        this.router.navigate(['login'], { queryParams: { from: state.url.substr(1) } });
      }
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
  
}
