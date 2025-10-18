import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Issues } from '../issues';
import { IssueService } from '../issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  standalone: false,
  templateUrl: './edit-issue.component.html',
  styleUrl: './edit-issue.component.css'
})
export class EditIssueComponent {
  editForm!:FormGroup;
  isFormSubmitted:boolean = false;
  @Input('id') id!:number;
  issue:any;
  dataLoaded = false;

  ngOnInit() {
    this.get_issues();
    console.log(this.issue)
    setTimeout(() => {      
      this.editForm = new FormGroup({
        description: new FormControl(this.issue.description),
        status: new FormControl(this.issue.status),
        severity: new FormControl(this.issue.severity),
        id: new FormControl(this.issue.id)
      });
      this.dataLoaded = true;
    }, 1000);
  }

  constructor(private issueService:IssueService, private router: Router) { }

  get_issues() {
    console.log(this.id);
    this.issueService.getIssuesByID(this.id).subscribe({
      next: (issues_list:any) => this.issue = issues_list,
      error: err => console.log(err)
    });
    console.log(this.issue)
  }
  

  onSubmit(){
    console.log(this.editForm.value);
    const newIssue = {
      id: this.editForm.value.id,
      description: this.editForm.value.description,
      status: this.editForm.value.status,
      severity: this.editForm.value.severity
    }
    this.isFormSubmitted = true;
    this.issueService.updateIssues(newIssue).subscribe({
      next: (data:any) => this.editForm.reset(this.issue),
      error: err => console.log(err)
    });
    this.router.navigate(['issues']);
  }

  canDeactivate() : boolean {
    if (this.editForm.dirty && !this.isFormSubmitted) {
      return confirm('Are you sure you want to leave ?');
    }
    return true;
  }

  onCancel() {
    if (this.canDeactivate()) {
      this.router.navigate(['issues']);
    }
  }
}
