import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SelectItem} from 'primeng/api';
import { Observable } from 'rxjs';
import { RegistrationServiceService } from '../../user-services/registratin-service/registration-service.service';
import { RegistrationModel } from '../../user-services/registratin-service/registration-model';
@Component({
  selector: 'app-registraton',
  templateUrl: './registraton.component.html',
  styleUrls: ['./registraton.component.css']
})
export class RegistratonComponent implements  OnInit {
  standard_class : SelectItem[];
  select_gender : SelectItem[];
  uploadedFiles: any[] = [];
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private registrationService : RegistrationServiceService,
  ) {
    this.standard_class = [
      {label: 'Select class', value: null},
      {label: 'I', value: 'I'},
      {label: 'II', value: 'II'},
      {label: 'III', value: 'III'},
      {label: 'IV', value: 'IV'},
      {label: 'V', value: 'V'},
      {label: 'VI', value: 'VI'},
      {label: 'VII', value: 'VII'},
      {label: 'VIII', value: 'VIII'},
      {label: 'IX', value: 'IX'},
      {label: 'X', value: 'X'},
      {label: 'N.C', value: 'N.C'},
      {label: 'L.K.G', value: 'L.K.G'},
      {label: 'U.K.G', value: 'U.K.G'}
     
  ];
  this.select_gender = [
    {label: 'Select Gender', value: null},
    {label: 'MALE', value: 'MALE'},
    {label: 'FEMALE', value: 'FEMALE'}
  ]
  }

  ngOnInit() { }

  text: string;

  disabled: boolean = true;

  login(): void{
  this.router.navigate(['login'],{relativeTo: this.route});
}

createRegistration(registrationModel : RegistrationModel): Observable<any>{
return null;
}
}
