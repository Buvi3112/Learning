import { Component, Input, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Issues } from '../issues';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  standalone: false,
  templateUrl: './add-issue.component.html',
  styleUrl: './add-issue.component.css'
})
export class AddIssueComponent implements OnInit {
  myForm!:FormGroup ;
  isFormSubmitted:boolean = false;
  issue!:any;
  initialFromValues = {
    Description: "",
    Status: "Open",
    Severity: "Minor",
    ID: 0,
  }

  ngOnInit() {
    this.get_issues();
    this.myForm = new FormGroup({
      Description: new FormControl(this.initialFromValues.Description),
      Status: new FormControl(this.initialFromValues.Status),
      Severity: new FormControl(this.initialFromValues.Severity),
      ID: new FormControl(this.initialFromValues.ID)
    });

    console.log(this.myForm)
  }

  constructor(private issueService:IssueService, private router: Router) { }

  get_issues() {
    this.issueService.getIssues().subscribe({
      next: (issues_list:any) => this.issue = issues_list,
      error: err => console.log(err)
    });
  }
  

  onSubmit(){
    console.log(this.myForm.value);
    const newIssue = {
      id: this.issue.length + 1,
      description: this.myForm.value.Description,
      status: this.myForm.value.Status,
      severity: this.myForm.value.Severity
    }
    this.isFormSubmitted = true;
    this.issueService.addIssues(newIssue).subscribe({
      next: (data:any) => this.myForm.reset(this.initialFromValues),
      error: err => console.log(err)
    });
    this.router.navigate(['issues']);
  }

  canDeactivate() : boolean {
    if (this.myForm.dirty && !this.isFormSubmitted) {
      return confirm('Are you sure you want to leave ?');
    }
    return true;
  }

}
