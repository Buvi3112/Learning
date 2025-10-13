import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IssueService } from './issue.service';
import { Issues } from './issues';

@Component({
  selector: 'app-issues',
  standalone: false,
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent implements OnInit{
  Description: string = "";
  Status: string = "";
  Severity: string = "";
  @Input() applicationName!: string;
  @Output() issue : EventEmitter<any> = new EventEmitter();
  issues_list!: Issues[];

  constructor(private issueService:IssueService) {}
  ngOnInit() {
    this.get_issues();
  }

  get_issues() {
    this.issueService.getIssues().subscribe({
      next: (issues_list:any) => this.issues_list = issues_list,
      error: err => console.log(err)
    });
    console.log(this.issues_list)
  }

  onAddIssue()
  {
    console.log(this.issues_list.length);
    const newIssue = {
      id: this.issues_list.length+1,
      description: this.Description,
      severity: this.Severity,
      status: this.Status
    };
    this.issueService.addIssues(newIssue).subscribe({
      next: (data:any) => this.get_issues(),
      error: err => console.log(err)
    });
    this.issue.emit(newIssue);

    this.Description = "";
    this.Severity = "";
    this.Status = "";
  }

}
