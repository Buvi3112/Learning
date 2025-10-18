import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditIssueComponent } from './edit-issue.component';

@Injectable({
  providedIn: 'root'
})
export class EditissueGuardService implements CanDeactivate<EditIssueComponent>{
  canDeactivate(component: EditIssueComponent): boolean {
      return component.canDeactivate();
    }
}
