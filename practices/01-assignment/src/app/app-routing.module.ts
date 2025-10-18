import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues/issues.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IssuedetailsComponent } from './issues/issuedetails/issuedetails.component';
import { AddIssueComponent } from './issues/add-issue/add-issue.component';
import { AddissueGuardService } from './issues/add-issue/addissue-guard.service';
import { IssuedetailsGuardService } from './issues/issuedetails/issuedetails-guard.service';
import { EditIssueComponent } from './issues/edit-issue/edit-issue.component';
import { EditissueGuardService } from './issues/edit-issue/editissue-guard.service';

const appRouts: Routes = [
  { path: 'issues', component : IssuesComponent},
  { path: 'addIssue', component : AddIssueComponent,
    canDeactivate : [AddissueGuardService]
  },
  { path: 'editIssue/:id', component : EditIssueComponent,
    canDeactivate : [EditissueGuardService]
  },
  { path: 'issues/:id', component : IssuedetailsComponent,
    canActivate : [IssuedetailsGuardService]
  },
  { path: '', component : AboutComponent},
  { path: 'about', redirectTo : ''}
]

@NgModule({
  imports: [RouterModule.forRoot(appRouts, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
