import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueService } from './issues/issue.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { IssuedetailsComponent } from './issues/issuedetails/issuedetails.component';
import { AddIssueComponent } from './issues/add-issue/add-issue.component';
import { AddissueGuardService } from './issues/add-issue/addissue-guard.service';
import { EditIssueComponent } from './issues/edit-issue/edit-issue.component';
import { EditissueGuardService } from './issues/edit-issue/editissue-guard.service';
import { IssuedetailsGuardService } from './issues/issuedetails/issuedetails-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    AboutComponent,
    IssuedetailsComponent,
    AddIssueComponent,
    EditIssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ IssueService, AddissueGuardService, EditissueGuardService, IssuedetailsGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
