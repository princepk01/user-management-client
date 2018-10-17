import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: Http
  ) { }

  getAllUser(): Observable<any> {
    
        return this.http.get(`http://localhost:8000/rest/users/getall`).map(res => res.json());
    
      }
}
