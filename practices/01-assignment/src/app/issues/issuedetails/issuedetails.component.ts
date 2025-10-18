import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issuedetails',
  standalone: false,
  templateUrl: './issuedetails.component.html',
  styleUrl: './issuedetails.component.css'
})
export class IssuedetailsComponent {
  @Input('id') id!:number;
  issueDetails:any;

  constructor(private router: Router, private issueService:IssueService) {}

  ngOnInit() {
    this.get_issue_details();
  }

  get_issue_details(){
    this.issueService.getIssuesByID(this.id).subscribe({
      next: (issues_list:any) => this.issueDetails = issues_list,
      error: err => console.log(err)
    });
  }

  goBack() {
    this.router.navigate(['issues']);
  }

}
