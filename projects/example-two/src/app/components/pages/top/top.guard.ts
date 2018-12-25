import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

const CATEGORIES = [
  'form_control', 'navigation', 'layout', 'button_indicators', 'popups_modals', 'data_table'
];

@Injectable()
export class TopGuard implements CanActivate, CanActivateChild {

  constructor( private router: Router ) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.check( url, next );
  }

  canActivateChild( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate( next, state );
  }

  check( url: string, route ): Observable<boolean> | Promise<boolean> | boolean {
    const category = route.params.category;
    if ( !category || ( CATEGORIES.indexOf( category ) >= 0 ) ) {
      return true;
    } else {
      this.router.navigate( [ '/' ] );
     return false;
    }
  }

}
