import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = '03-assignment';
  applicationName = 'Online Shopping App';
  newIssue : any = [];

  onAdd (issue: any) {
    console.log(issue);
    this.newIssue.description = issue.description;
    this.newIssue.status = issue.status;
    this.newIssue.id = issue.id;
    this.newIssue.severity = issue.severity;

    console.log(this.newIssue.length);

    console.log(this.newIssue);
  }
}
