import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
   private http: Http
  ) { }

  getAllUser(): Observable<any> {

    return this.http.get(`http://localhost:8000/rest/users/getall`).map(res => res.json());

  }
  loginData(login): Observable<any> {
    let options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json;charset=UTF-8');
  
    let body = JSON.stringify(login);
    console.log(login);
    return this.http.post(`http://localhost:8000/rest/users/login`, body,options);
  }
}
