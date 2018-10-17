import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from '../../user-services/login-service/login.service';
import {Login} from '../../user-services/login-service/login';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginListComponent} from '../login-list/login-list.component';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import {MatSnackBar} from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService,LoginListComponent] 
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService : LoginService,
   
  ) { }

  ngOnInit() {
  }
  loginData = {};
  userLogin=function(){
    var login = new Login();
    login.userName = this.userName;
    login.userPassword = this.userPassword;
    var jsonValue = JSON.stringify(login);
    console.log(jsonValue);
    this.loginService.loginData(login).subscribe(res => {
      console.log(res);
    })
   this.router.navigate(['dashboard'], {relativeTo: this.route});
  }
  loadUser(): Observable<any> {
var dummy;
    this.loginService.getAllUser().subscribe(
      data =>{
        this.loginData = data;
        dummy=data;
     //   console.log(data);
        
        //console.log(this.loginData);
      } 
    );
return dummy;
    
   
  }
  forgot(): void {
    this.router.navigate(['forgot'], { relativeTo: this.route });
  }

  registration(): void {
    this.router.navigate(['registration'], { relativeTo: this.route });
  }
}
