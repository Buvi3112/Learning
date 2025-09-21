import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-issues',
  standalone: false,
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent {
  Description: string = "";
  Status: string = "";
  Severity: string = "";

  issues_list : any = [
    {
      id:1,
      description: "On Clicking Delete, the application Crashes",
      severity: "Critical",
      status: "Open"
    },
    {
      id:2,
      description: "The heading Add is wrongly displayed as Edit",
      severity: "Major",
      status: "In Progress",
    },
    {
      id:3,
      description: "After adding the new Entry the page is not automatically redirected to the view Page",
      severity: "Major",
      status: "Closed",
    },
  ];

  onAddIssue()
  {
    console.log(this.issues_list.length);
    this.issues_list.push({
      id: this.issues_list.length+1,
      description: this.Description,
      severity: this.Severity,
      status: this.Status
    });

    this.Description = "";
    this.Severity = "";
    this.Status = "";
  }

}
