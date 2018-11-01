import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

   constructor(private http: HttpClient) { }

   loginUrl = 'assets/login.json';

   public getLoginList(): Observable<any> {
     return this.http.get(this.loginUrl);
   }
   
}