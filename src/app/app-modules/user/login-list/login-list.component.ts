import { Component, OnInit, Input } from '@angular/core';
import {TableModule} from 'primeng/table';
import {LoginService} from './../../user-services/login-service/login.service';
import {UserServiceService} from './../../user-services/user-service/user-service.service';
import {UserList} from './../../user-services/user-service/user-list';
@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css'],
  providers: [LoginService] 
})
export class LoginListComponent implements OnInit {
  
 // @Input() menuName: string = '';

  constructor(
    private userServiceService : UserServiceService,
  ) {
    
   }
  cols: any[];
  userList : UserList[];
  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id', width: '8%' },
      {field: 'userId', header: 'User Id', width:'12%' },
      { field: 'name', header: 'Name', width:'20%'},
      { field: 'dateOfBirth', header: 'Date Of Birth',  width:'23%' },
      { field: 'email', header: 'Email', width:'25%' },
      { field: 'mobileNumber', header: 'Mobile Number', width:'25%'},
      { field: 'city', header: 'City', width:'10%'},
      { field: 'state', header: 'State', width:'10%' },
      { field: 'pinCode', header: 'Pin Code',width: '16%'},
  ];
  this.loadUser();
  }
loadUser(){
this.userServiceService.getAllUser().subscribe(
  data=>{
    this.userList = data;
    console.log(this.userList);
  }
)
}
}
