import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IssuedetailsGuardService implements CanActivate{

  canActivate(): boolean {
    return confirm('Are you sure you want view this details ?');
  }
}
