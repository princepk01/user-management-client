import {NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegistratonComponent} from './registraton/registraton.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UserRoutingModule} from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginListComponent } from './login-list/login-list.component'
import { HttpClientModule } from '@angular/common/http'; 
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { MenuComponent } from './menu/menu.component';
import {MenuItem} from 'primeng/api';
// import {PanelMenu} from 'primeng/panelmenu';
//import {MenuItem} from 'primeng/primeng'; 
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports:[
        CommonModule,
        UserRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        Angular2FontawesomeModule,
        PanelMenuModule,
        MenuModule,
        TableModule,
  //      BrowserAnimationsModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
    declarations:[LoginComponent, RegistratonComponent, ForgotPasswordComponent, DashboardComponent, LoginListComponent, MenuComponent]
})
export class UserModule{}