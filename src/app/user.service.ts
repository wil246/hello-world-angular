import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  listUrl: string = "http://prs.doudsystems.com/Users/List";
  getUrl: string = "http://prs.doudsystems.com/Users/Get/";
  editUrl: string = "http://prs.doudsystems.com/Users/Change/";

  list(): Observable<any>{
    return this.http.get(this.listUrl) as Observable<any>;
  }
  get(id: number): Observable<any>{
  return this.http.get(this.getUrl+id) as Observable<any>;
  }
  chang(user: any): Observable<boolean>{
    return this.http.post(this.editUrl, user) as Observable<boolean>;
  }
  constructor(private http: HttpClient) { }

}
