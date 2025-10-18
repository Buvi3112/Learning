import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AddIssueComponent } from './add-issue.component';

@Injectable()
export class AddissueGuardService implements CanDeactivate<AddIssueComponent>{
  canDeactivate(component: AddIssueComponent): boolean {
    return component.canDeactivate();
  }
}
