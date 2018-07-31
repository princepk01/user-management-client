import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {LoginComponent} from './login/login.component';
import {RegistratonComponent} from './registraton/registraton.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UserRoutingModule} from './user-routing.module'

@NgModule({
    imports:[
        CommonModule,
        UserRoutingModule,
        NgbModule
    ],
    declarations:[LoginComponent, RegistratonComponent, ForgotPasswordComponent]
})
export class UserModule{}