import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issues } from './issues';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class IssueService {
  private _issueURL = "http://localhost:3001/issues_list";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(this._issueURL)
  }

  addIssues(issues:Issues){
    console.log(issues);
    return this.http.post(this._issueURL, issues, this.httpOptions);
  }
}
